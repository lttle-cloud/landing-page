"use client";

import classes from "./page-header.module.scss";
import Image from "next/image";
import { useBreakpoint } from "@/lib/hooks";
import Button from "../button/button";

const sizesWithShortLogo = ["mobile", "tablet"];

const PageHeader = () => {
    const breakpoint = useBreakpoint();
    return (
        <header className={classes.root}>
            {sizesWithShortLogo.includes(breakpoint) ? (
                <Image
                    src={"/assets/logo-short.svg"}
                    alt="logo"
                    width={88}
                    height={66}
                />
            ) : (
                <Image
                    src={"/assets/logo-long.svg"}
                    alt="logo"
                    width={225}
                    height={70}
                />
            )}

            <ul className={classes.nav}>
                <li></li>
            </ul>

            <Button onClick={() => {}}>sign up</Button>
        </header>
    );
};

export default PageHeader;
