"use client";

import { useEffect, useState } from "react";
import { BreakpointType } from "./types";

//breakpoints
// $breakpoint-mobile: 480px;
// $breakpoint-tablet: 768px;
// $breakpoint-desktop: 1024px;
// $breakpoint-large: 1440px;

const useBreakpoint: () => BreakpointType = () => {
    const [breakpoint, setBreakpoint] = useState<BreakpointType>("mobile");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setBreakpoint("mobile");
            } else if (window.innerWidth < 768) {
                setBreakpoint("tablet");
            } else if (window.innerWidth < 1024) {
                setBreakpoint("desktop");
            } else {
                setBreakpoint("large");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint as BreakpointType;
};

export { useBreakpoint };
