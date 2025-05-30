import { cls } from "@/lib/utils";
import classes from "./section-vibe-devops.module.scss";
import Button from "../button/button";
import Link from "next/link";
import { SIGN_UP_URL } from "@/app/constants";

type Card = {
    title: string;
    description: React.ReactNode;
    color: string;
};

const cards: Card[] = [
    {
        title: "zero idle. zero wait. just vibes.",
        description: (
            <p>
                every millisecond counts. especially when you&apos;re chaining
                requests through LLMs, edge functions, and dynamic APIs.
                <br />
                <br />
                but most clouds? they bill you to wait. <br />
                waiting for OpenAI to respond?
                <br />
                waiting on a webhook to return?
                <br />
                waiting on a fetch call from hell to hit timeout?
                <br /> you&apos;re still paying for idle.
            </p>
        ),
        color: "red",
    },

    {
        title: "what is vibe devops?",
        description: (
            <p>
                fire-and-forget workloads that spin up fast, do one job, and
                disappear
                <br />
                <br />
                sub-10ms cold start, even for first-time requests
                <br />
                <br />
                full compatibility with any frameworks and existing Docker
                images (yes, even your own)
                <br />
                <br />
                fully usable straight from your AI agent workflow
                <br />
                <br />
                built for the open world
            </p>
        ),
        color: "blue",
    },
    {
        title: "stop burning compute just to hold the line",
        description: (
            <p>
                legacy clouds bill by the second, minute, or worse, by the
                uptime of a VM that isn&apos;t even doing anything.
                <br />
                <br />
                with vibe devops, your compute comes alive only when needed.
                runs hot, finishes fast, and gets out of your way.
                <br />
                <br />
                just vibes, no idle you deploy your function it runs instantly
                it chills while waiting it finishes fast
                <br />
                <br />
                you pay only for the work it did
            </p>
        ),
        color: "gray",
    },
    {
        title: "want to try it?",
        description: (
            <>
                <p>
                    spin up your first vibe devops workload on lttle.cloud
                    <br />
                    <br />
                    bring your own Docker image, no rewrites, and no billing
                    surprises.
                </p>
                <div>
                    <Link href={SIGN_UP_URL} target="_blank">
                        <Button tabIndex={-1}>sign up</Button>
                    </Link>
                </div>
            </>
        ),
        color: "special",
    },
];

const SectionVibeDevops = () => {
    return (
        <section className={classes.root} id="vibe-devops">
            <div className={classes.titleContainer}>
                <h2>
                    introducing <span>vibe devops</span>
                </h2>
                <p>
                    vibe devops is a new way of deploying apps where code runs
                    instantly, scales effortlessly, and you only pay when real
                    work happens.
                    <br />
                    it’s devops without the heavy lifting: fast, event-driven,
                    and built to flow with modern AI tools and dynamic
                    workloads.
                </p>
            </div>
            <div className={classes.cardsContainer}>
                <div className={classes.column}>
                    {cards.slice(0, 2).map((card) => (
                        <div
                            className={cls(classes.card, classes[card.color])}
                            key={card.title}
                        >
                            <div className={classes.cardTitle}>
                                <h3>{card.title}</h3>
                            </div>
                            <div className={classes.cardDescription}>
                                {card.description}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={classes.column}>
                    {cards.slice(2, 5).map((card) => (
                        <div
                            className={cls(classes.card, classes[card.color])}
                            key={card.title}
                        >
                            <div className={classes.cardTitle}>
                                <h3>{card.title}</h3>
                            </div>
                            <div className={classes.cardDescription}>
                                {card.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionVibeDevops;
