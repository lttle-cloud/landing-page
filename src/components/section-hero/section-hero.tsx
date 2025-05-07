"use client";

// import Image from "next/image";
import classes from "./section-hero.module.scss";
import Lottie from "@lottielab/lottie-player/react";
import TypewriterAnimation from "../typewriter-animation/typewriter-animation";
import Image from "next/image";


const words = ["web app", "ai agent", "api", "database"];
const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const TYPING_PAUSE_TIME = 2000;

const SectionHero = () => {
    return (
        <section className={classes.root}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <div className={classes.block1}>
                        <h1>
                            the cloud is{" "}
                            <span className={classes.emphasis}>
                                bloated
                            </span>,
                            <br />
                            so we tore it down and
                            <br />
                            built{" "}
                            <span className={classes.highlight}>
                                something better
                            </span>
                        </h1>

                        <h1>
                            no rewrites. no cold starts. no paying for idle.
                        </h1>
                    </div>

                    <div className={classes.block2}>
                        <div className={classes.block2Text}>
                            <h2>
                                deploy your{" "}
                                <span className={classes.wordScrollEmphasis}>
                                    <TypewriterAnimation
                                        words={words}
                                        typingSpeed={TYPING_SPEED}
                                        deletingSpeed={DELETING_SPEED}
                                        pauseTime={TYPING_PAUSE_TIME}
                                    />
                                </span>{" "}
                                as serverless in seconds
                            </h2>

                            <div className={classes.features}>
                                {/* <h2>run any app as serverless</h2> */}
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
                                            and pricing that doesn&apos;t punish
                                            you for success
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className={classes.codeInstructions}>
                                <h2>just run:</h2>
                                <div className={classes.codeBlock}>
                                    <p>lttle deploy</p>
                                </div>
                            </div> */}
                        </div>

                        <div className={classes.actions}>
                            <a href="/get-started">get started</a>
                            <a href="/how-it-works">how it works</a>
                            <a href="/vibe-devops">vibe devops</a>
                        </div>
                    </div>
                </div>
                <div className={classes.image}>
                    {/* <Image
                        src="/assets/hero-image.svg"
                        alt="hero"
                        width={1000}
                        height={1000}
                    /> */}
                    <Lottie
                        // src="https://cdn.lottielab.com/l/5NgnQtvt2yyWa1.json"
                        src="/assets/lottie/hero-anim.json"
                        autoplay
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionHero;
