"use client";

import Image from "next/image";
import classes from "./page-footer.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];
const PageFooter = () => {
    const currentYear = new Date().getFullYear();
    const [windowWidth, setWindowWidth] = useState(0);
    const logoHeight = windowWidth * 0.13;

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <footer className={classes.root}>
            <div className={classes.content}>
                <div className={classes.links}>
                    <p className={classes.copyright}>
                        {currentYear} lttle.cloud
                    </p>
                    <ul>
                        {links.map((link, index) => (
                            <>
                                <Link
                                    href={link.href}
                                    key={`${link.label}-${index}`}
                                >
                                    {link.label}
                                </Link>
                                {index < links.length - 1 && "•"}
                            </>
                        ))}
                    </ul>
                </div>
                <div className={classes.socials}></div>
            </div>
            <div
                className={classes.graphicContainer}
                style={{ height: logoHeight }}
            >
                <Image
                    src="/assets/logo-footer.svg"
                    alt="lttle.cloud"
                    width={windowWidth}
                    height={logoHeight}
                    style={{ left: -0.85 * windowWidth }}
                    role="presentation"
                />
                <Image
                    src="/assets/logo-footer.svg"
                    alt="lttle.cloud"
                    width={windowWidth}
                    height={logoHeight}
                    style={{ left: 0.25 * windowWidth }}
                    role="presentation"
                />
            </div>
        </footer>
    );
};

export default PageFooter;
