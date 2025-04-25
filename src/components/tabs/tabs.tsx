"use client";

import { useEffect, useRef } from "react";
import { cls } from "@/lib/utils";
import classes from "./tabs.module.scss";
import { useBreakpoint } from "@/lib/hooks";

interface TabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    children: React.ReactNode;
}

const Tabs = ({ tabs, activeTab, onTabChange, children }: TabsProps) => {
    const breakpoint = useBreakpoint();

    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
    const paddingRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = tabs.indexOf(activeTab);

        tabRefs.current.forEach((tab, index) => {
            if (tab && paddingRefs.current[index]) {
                let width = tab.getBoundingClientRect().width;

                if (index === 0 && activeIndex !== 0) {
                    width += 0;
                }

                if (index === 0 && index === activeIndex) {
                    width -= 5;
                }

                if (index !== 0 && index === activeIndex) {
                    width -= 10;
                }

                if (index !== 0 && index !== activeIndex) {
                    width -= 5;
                }

                paddingRefs.current[index]!.style.width = `${width}px`;
            }
        });
    }, [activeTab, breakpoint]); // Update when tabs change

    return (
        <div className={classes.root}>
            <div className={classes.tabs}>
                {tabs.map((tab, index) => (
                    <div
                        id={tab}
                        key={tab}
                        ref={(el) => (tabRefs.current[index] = el)}
                        className={cls(
                            classes.tab,
                            activeTab === tab ? classes.active : ""
                        )}
                        onClick={() => onTabChange(tab)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                onTabChange(tab);
                            }
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>
            <div className={classes.tabsPadding}>
                {tabs.map((tab, index) => (
                    <div
                        key={tab}
                        ref={(el) => (paddingRefs.current[index] = el)}
                        className={cls(
                            classes.tabPadding,
                            activeTab === tab ? classes.active : ""
                        )}
                    ></div>
                ))}
                <div className={cls(classes.tabPadding, classes.buffer)}></div>
            </div>
            <div className={classes.content} id={`${activeTab}-content`}>
                {children}
            </div>
        </div>
    );
};

export default Tabs;
