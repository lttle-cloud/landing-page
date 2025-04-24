"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./custom-scrollbar.module.scss";
import { cls } from "@/lib/utils";

interface CustomScrollbarProps {
    containerRef: React.RefObject<HTMLElement>;
    color: "red" | "teal" | "cream";
    initialScroll?: number;
}

const CustomScrollbar = ({
    containerRef,
    color,
    initialScroll = 0,
}: CustomScrollbarProps) => {
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);
    const observer = useRef<ResizeObserver | null>(null);
    const [thumbHeight, setThumbHeight] = useState(20);
    const [scrollStartPosition, setScrollStartPosition] = useState<
        number | null
    >(null);
    const [initialScrollTop, setInitialScrollTop] = useState<number>(0);

    useEffect(() => {
        if (!containerRef.current) return;

        if (initialScroll) {
            const scrollableWidth =
                containerRef.current.scrollWidth -
                containerRef.current.clientWidth;
            containerRef.current.scrollLeft =
                scrollableWidth * Math.min(Math.max(0, initialScroll), 1);
        }

        const calculateThumbPosition = () => {
            if (!containerRef.current || !scrollThumbRef.current) return;

            const { scrollLeft, scrollWidth, clientWidth } =
                containerRef.current;
            const trackWidth = scrollTrackRef.current?.clientWidth || 0;
            const thumbPercentage = clientWidth / scrollWidth;
            const thumbPosition = (scrollLeft / scrollWidth) * trackWidth;

            setThumbHeight(Math.max(thumbPercentage * trackWidth, 20));
            scrollThumbRef.current.style.transform = `translateX(${thumbPosition}px)`;
        };

        containerRef.current.addEventListener("scroll", calculateThumbPosition);
        observer.current = new ResizeObserver(calculateThumbPosition);
        observer.current.observe(containerRef.current);

        return () => {
            containerRef.current?.removeEventListener(
                "scroll",
                calculateThumbPosition
            );
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [containerRef, initialScroll]);

    const handleThumbMousedown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setScrollStartPosition(e.clientX);
        if (containerRef.current) {
            setInitialScrollTop(containerRef.current.scrollLeft);
        }
    };

    const handleDocumentMouseMove = (e: MouseEvent) => {
        if (scrollStartPosition === null) return;

        const deltaX = e.clientX - scrollStartPosition;
        const container = containerRef.current;
        const trackElement = scrollTrackRef.current;

        if (!container || !trackElement) return;

        const scrollableWidth = container.scrollWidth - container.clientWidth;
        const percentage =
            deltaX * (container.scrollWidth / trackElement.clientWidth);

        container.scrollLeft = Math.min(
            Math.max(0, initialScrollTop + percentage),
            scrollableWidth
        );
    };

    const handleDocumentMouseup = () => {
        setScrollStartPosition(null);
    };

    useEffect(() => {
        if (scrollStartPosition !== null) {
            document.addEventListener("mousemove", handleDocumentMouseMove);
            document.addEventListener("mouseup", handleDocumentMouseup);
            return () => {
                document.removeEventListener(
                    "mousemove",
                    handleDocumentMouseMove
                );
                document.removeEventListener("mouseup", handleDocumentMouseup);
            };
        }
    }, [scrollStartPosition]);

    return (
        <div className={cls(classes.scrollbar, classes[color])}>
            <div className={classes.scrollbarTrack} ref={scrollTrackRef}>
                <div
                    className={classes.scrollbarThumb}
                    ref={scrollThumbRef}
                    style={{ width: `${thumbHeight}px` }}
                    onMouseDown={handleThumbMousedown}
                />
            </div>
        </div>
    );
};

export default CustomScrollbar;
