"use client";

import classes from "./page-header.module.scss";
import Image from "next/image";
import { useBreakpoint } from "@/lib/hooks";
import Button from "../button/button";
import { Menu } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
import {
    CONTACT_EMAIL,
    IGNITION_URL,
    MANIFESTO_URL,
    SIGN_UP_URL,
} from "@/app/constants";

const sizesWithShortLogo = ["mobile", "tablet"];

const navItems = [
    {
        label: "manifesto",
        href: MANIFESTO_URL,
        external: true,
    },
    {
        label: "get started",
        href: "/#get-started",
    },
    {
        label: "why lttle.cloud",
        href: "/#why-lttle-cloud",
    },
    {
        label: "pricing",
        href: "/pricing",
    },
    {
        label: "contact",
        href: `mailto:${CONTACT_EMAIL}`,
    },
    // TODO: add use cases
    // {
    //     label: "use cases",
    //     href: "/use-cases",
    // },
    {
        label: "resources",
        href: IGNITION_URL,
        external: true,
    },
    {
        label: "about us",
        href: "/about-us",
    },
    {
        label: "blog",
        href: "/blog",
    },
    {
        label: "careers",
        href: "/careers",
    },
];

const PageHeader = () => {
    const breakpoint = useBreakpoint();
    const [opened, setOpened] = useState(false);

    return (
        <header className={classes.root} aria-label="Main navigation">
            <Link href="/">
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
            </Link>

            {!sizesWithShortLogo.includes(breakpoint) ? (
                <>
                    <ul className={classes.nav}>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    target={item.external ? "_blank" : "_self"}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Link href={SIGN_UP_URL} target="_blank">
                        <Button className={classes.ctaButton} tabIndex={-1}>
                            sign up
                        </Button>
                    </Link>
                </>
            ) : (
                <Menu
                    position="bottom-end"
                    width={200}
                    opened={opened}
                    onChange={setOpened}
                >
                    <Menu.Target>
                        <button
                            className={`${classes.menuButton} ${
                                opened ? classes.menuButtonOpen : ""
                            }`}
                        >
                            <Image
                                src={"/assets/icons/menu.svg"}
                                alt="menu"
                                width={32}
                                height={32}
                            />
                        </button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {navItems.map((item) => (
                            <Menu.Item
                                key={item.label}
                                component="a"
                                href={item.href}
                                target={item.external ? "_blank" : "_self"}
                            >
                                {item.label}
                            </Menu.Item>
                        ))}
                        <Menu.Item
                            key="sign-up"
                            component="a"
                            href={SIGN_UP_URL}
                            target="_blank"
                        >
                            sign up
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            )}
        </header>
    );
};

export default PageHeader;
