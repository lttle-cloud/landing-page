"use client";

import Image from "next/image";
import classes from "./page-footer.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { CONTACT_EMAIL } from "@/app/constants";

type Social = {
    label: string;
    href: string;
    icon: string;
};

const links = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about-us",
    },
    {
        label: "Contact",
        href: `mailto:${CONTACT_EMAIL}`,
    },
];

const socials: Social[] = [
    {
        label: "X",
        href: "https://x.com/lttlecloud_",
        icon: "/assets/icons/social-media-x.svg",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/lttle-cloud/",
        icon: "/assets/icons/social-media-linkedin.svg",
    },
    {
        label: "Discord",
        href: "https://discord.gg/xhNGGrZQja",
        icon: "/assets/icons/social-media-discord.svg",
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
                            <Fragment key={`${link.label}-${index}`}>
                                <Link href={link.href}>{link.label}</Link>
                                {index < links.length - 1 && "•"}
                            </Fragment>
                        ))}
                    </ul>
                </div>
                <div className={classes.socials}>
                    {socials.map((social, index) => (
                        <Fragment key={`${social.label}-${index}`}>
                            <Link
                                href={social.href}
                                target="_blank"
                                className={classes.social}
                                rel="noopener noreferrer"
                                aria-label={social.label}
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.label}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </Fragment>
                    ))}
                </div>
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
