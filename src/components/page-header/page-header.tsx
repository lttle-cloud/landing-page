"use client";

import classes from "./page-header.module.scss";
import Image from "next/image";
import { useBreakpoint } from "@/lib/hooks";
import Button from "../button/button";
import { Menu, Text } from "@mantine/core";
import { useState } from "react";

const sizesWithShortLogo = ["mobile", "tablet"];

const navItems = [
    {
        label: "manifesto",
        href: "/manifesto",
    },
    {
        label: "get started",
        href: "/get-started",
    },
    {
        label: "why lttle.cloud",
        href: "/why-lttle-cloud",
    },
    {
        label: "pricing",
        href: "/pricing",
    },
    {
        label: "contact",
        href: "/contact",
    },
    {
        label: "use cases",
        href: "/use-cases",
    },
    {
        label: "resources",
        href: "/resources",
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

            {!sizesWithShortLogo.includes(breakpoint) ? (
                <>
                    <ul className={classes.nav}>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <Button className={classes.ctaButton} onClick={() => {}}>
                        sign up
                    </Button>
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
                            >
                                {item.label}
                            </Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>
            )}
        </header>
    );
};

export default PageHeader;
