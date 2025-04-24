"use client";

import Image from "next/image";
import classes from "./section-hero.module.scss";
import { useEffect, useState } from "react";

const words = ["bloated", "slow", "expensive", "complex"];
const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_TIME = 2000;

const SectionHero = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [delta, setDelta] = useState(TYPING_SPEED);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
                setDelta(DELETING_SPEED);
            } else {
                setText(currentWord.substring(0, text.length + 1));
                setDelta(TYPING_SPEED);
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), PAUSE_TIME);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, delta);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, delta]);

    return (
        <section className={classes.root}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <div className={classes.block1}>
                        <h1>
                            the cloud is{" "}
                            <span className={classes.emphasis}>{text}</span> ,
                            <br />
                            so we tore it down and
                            <br />
                            built{" "}
                            <span className={classes.highlight}>
                                something better
                            </span>
                        </h1>

                        <h1>
                            no cold starts. no middle layers. no vendor traps.
                        </h1>
                    </div>

                    <div className={classes.block2}>
                        <div className={classes.features}>
                            <h2>run any app as serverless</h2>
                            <ul>
                                <li>
                                    <Image
                                        className={classes.bullet}
                                        src="/assets/feature-bullet.svg"
                                        alt="check"
                                        width={25}
                                        height={22}
                                    />
                                    <p>with sub-10ms startup</p>
                                </li>
                                <li>
                                    <Image
                                        className={classes.bullet}
                                        src="/assets/feature-bullet.svg"
                                        alt="check"
                                        width={25}
                                        height={22}
                                    />
                                    <p>from existing Docker images</p>
                                </li>
                                <li>
                                    <Image
                                        className={classes.bullet}
                                        src="/assets/feature-bullet.svg"
                                        alt="check"
                                        width={25}
                                        height={22}
                                    />
                                    <p>
                                        and pricing that doesn&apos;t punish you
                                        for success
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className={classes.actions}>
                            <a href="/get-started">get started</a>
                            <a href="/how-it-works">how it works</a>
                            <a href="/vibe-devops">vibe devops</a>
                        </div>
                    </div>
                </div>
                <div className={classes.image}>
                    <Image
                        src="/assets/hero-image.svg"
                        alt="hero"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionHero;
