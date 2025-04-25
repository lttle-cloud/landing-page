"use client";

import { cls, isOverflowing } from "@/lib/utils";
import LttleCloudSpan from "../lttle-cloud-span/lttle-cloud-span";
import Separator from "../separator/separator";
import classes from "./section-why-lttle-cloud.module.scss";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import CustomScrollbar from "../custom-scrollbar/custom-scrollbar";

type Card = {
    title: string;
    description: React.ReactNode;
    image: string;
};

const problemCards: Card[] = [
    {
        title: "the cloud is riddled with inefficiencies",
        description: (
            <p>
                you&apos;re paying for idle resources, wrestling with slow,
                unpredictable autoscaling, or navigating the hidden complexity
                of serverless platforms.
                <br />
                <br /> you&apos;re forced to choose between overpaying for
                underused VMs, waiting for laggy functions to spin up, or
                stitching together layers of services that were never designed
                to play nice.
                <br />
                <br />
                the result?
                <br />
                <br />
                <b>bloated infrastructure</b>, wasted time, and a deployment
                experience that feels like duct-taping your app to a black box.
            </p>
        ),
        image: "/assets/icons/x.svg",
    },
    {
        title: "vendor lock-in is inevitable",
        description: (
            <p>
                despite all the promises, the reality of cloud computing is
                still far from seamless.
                <br />
                <br />
                you&apos;re locked into{" "}
                <b>
                    a costly, walled-garden ecosystem where every service, API,
                    and configuration is designed to keep you dependent and
                    paying more over time.
                </b>
                <br />
                <br />
                each decision, whether to scale VMs, adopt functions, or manage
                containers, comes with hidden trade-offs, vendor lock-in, and a
                tangled mess of configuration and cost.
            </p>
        ),
        image: "/assets/icons/lock-closed.svg",
    },
    {
        title: "no matter the approach",
        description: (
            <p>
                providers have built tightly integrated stacks that make it easy
                to get started but <b>nearly impossible to leave</b>, trapping
                your app in proprietary tooling and infrastructure choices that
                benefit them, not you.
                <br />
                <br />
                as your architecture grows, so do the costs, complexity, and
                constraints.
                <br />
                <br />
                it&apos;s a model built to extract maximum revenue, not deliver
                maximum efficiency.
                <br />
                <br />
                the dream of a fast, flexible, developer-friendly cloud has yet
                to be realized.
            </p>
        ),
        image: "/assets/icons/heart-broken.svg",
    },
];

const solutionCards: Card[] = [
    {
        title: "blazing-fast performance",
        description: (
            <p>
                workloads on lttle.cloud start in under 10 milliseconds, every
                time. <br />
                <br />
                <b>no cold starts. no warm-up hacks.</b>
                <br />
                <br />
                just instant execution, no matter when the request comes in.{" "}
                <br />
                <br />
                whether it&apos;s your first request or your thousandth, your
                app is always ready to respond with near-zero latency.
                <br />
                <br />
                whether you&apos;re powering a real-time API, an LLM agent, or a
                high-traffic backend, you get consistent, blazing-fast
                performance without the traditional trade-offs.
                <br />
                <br />
                <b>
                    it just works. fast, reliable, and exactly when you need it.
                </b>
            </p>
        ),
        image: "/assets/icons/rocket.svg",
    },
    {
        title: "fully open-source & built in public",
        description: (
            <p>
                the platform, CLI, runtime, everything is open-source.
                <br />
                <br />
                <b>no hidden services. no black boxes.</b>
                <br />
                <br />
                you&apos;ll always be able to self-host lttle.cloud.
                <br />
                <br />
                run it on your own hardware, fork it, extend it, your cloud,
                your rules.
                <br />
                <br />
                bring your own Docker we support OCI-compliant images, which
                means you can deploy any app you already have.
                <br />
                <br />
                no rewrites. no vendor-specific formats. no lock-in.
                <br />
                <br />
                ever.
            </p>
        ),
        image: "/assets/icons/folder-open.svg",
    },
    {
        title: "fair & efficient cost model",
        description: (
            <p>
                unlike traditional cloud providers,{" "}
                <b>
                    lttle.cloud charges you only when your workload is doing
                    actual work.
                </b>
                <br />
                <br />
                not for idle, not for waiting, and not for over-provisioned
                infrastructure.
                <br />
                <br />
                there are <b>no hidden costs</b> for keeping a VM warm, no
                billing while your app waits on an API response, and no surprise
                spikes because autoscaling lagged behind your traffic. whether
                you're handling one request or a thousand, you scale without
                burning money on unused resources.
                <br />
                <br />
                it&apos;s a fairer, leaner approach to cloud billing.
                <br />
                <br />
                finally aligned with how your app actually runs.
            </p>
        ),
        image: "/assets/icons/money.svg",
    },
];

const advantageCards: Card[] = [
    {
        title: "a radically simpler stack",
        description: (
            <p>
                <b>from 7 layers to 4.</b>
                <br />
                <br />
                forget the tangled mess of: bare metal VM OS container FaaS
                (function as a service) (ex: aws lambda, GCP functions) runtime
                (nodejs) your code
                <br />
                <br />
                with lttle.cloud, you deploy straight to the metal with just:
                <br />
                <br />
                bare metal micro VM lttle runtime (Node JS) your code
                <br />
                <br />
                less abstraction. less latency. less to go wrong. more secure.
                <br />
                <br />
                faster builds, easier debugging, and a cleaner dev experience.
            </p>
        ),
        image: "/assets/icons/database.svg",
    },
    {
        title: "use your existing Docker images",
        description: (
            <p>
                already set up with Docker images?
                <br />
                <br />
                no problem. keep them.
                <br />
                <br />
                lttle.cloud speaks OCI and supports your existing setup with
                zero modifications.
                <br />
                <br />
                no migration headaches, no vendor-specific wrappers.{" "}
                <b>just drop your image and go.</b>
            </p>
        ),
        image: "/assets/icons/cloud-arrow-down.svg",
    },
    {
        title: "no cold starts. ever.",
        description: (
            <p>
                tired of your app waking up slower than a Monday morning?
                <br />
                <br />
                our infrastructure ensures workloads spin up in under 10ms,
                always ready to serve.
                <br />
                <br />
                <b>no warm-up hacks. no scheduled pings.</b>
                <br />
                <br />
                your code stays ready. so your users never wait.
            </p>
        ),
        image: "/assets/icons/fire.svg",
    },
];

const SectionWhyLttleCloud = () => {
    const containerRefProblem = useRef<HTMLDivElement>(null);
    const containerRefSolution = useRef<HTMLDivElement>(null);
    const containerRefAdvantage = useRef<HTMLDivElement>(null);

    const [problemOverflows, setProblemOverflows] = useState(false);
    const [solutionOverflows, setSolutionOverflows] = useState(false);
    const [advantageOverflows, setAdvantageOverflows] = useState(false);

    // Add new state for tracking drag
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const draggedContainer = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const container = e.currentTarget;
            setIsDragging(true);
            draggedContainer.current = container;
            setStartX(e.pageX - container.offsetLeft);
            setScrollLeft(container.scrollLeft);
        },
        []
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        draggedContainer.current = null;
    }, []);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging || !draggedContainer.current) return;
            e.preventDefault();
            const x = e.pageX - draggedContainer.current.offsetLeft;
            const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
            draggedContainer.current.scrollLeft = scrollLeft - walk;
        },
        [isDragging, startX, scrollLeft]
    );

    const checkOverflow = useCallback(() => {
        if (containerRefProblem.current) {
            setProblemOverflows(
                containerRefProblem.current.scrollWidth >
                    containerRefProblem.current.clientWidth
            );
        }
        if (containerRefSolution.current) {
            setSolutionOverflows(
                containerRefSolution.current.scrollWidth >
                    containerRefSolution.current.clientWidth
            );
        }
        if (containerRefAdvantage.current) {
            setAdvantageOverflows(
                containerRefAdvantage.current.scrollWidth >
                    containerRefAdvantage.current.clientWidth
            );
        }
    }, []);

    useEffect(() => {
        checkOverflow();

        const resizeObserver = new ResizeObserver(() => {
            checkOverflow();
        });

        if (containerRefProblem.current) {
            resizeObserver.observe(containerRefProblem.current);
        }
        if (containerRefSolution.current) {
            resizeObserver.observe(containerRefSolution.current);
        }
        if (containerRefAdvantage.current) {
            resizeObserver.observe(containerRefAdvantage.current);
        }

        window.addEventListener("resize", checkOverflow);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", checkOverflow);
        };
    }, [checkOverflow]);

    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseUp, handleMouseMove]);

    return (
        <section className={classes.root}>
            <div className={classes.content}>
                <div className={classes.titleContainer}>
                    <h2>
                        why <LttleCloudSpan />
                    </h2>
                    <Separator width="100px" height="8px" color="red" />
                    <p>
                        cute subtitle about getting started here maybe hmm,
                        something about this long yeah seems right
                        <br /> maybe a couple of paragraphs hmmm
                    </p>
                </div>
            </div>

            <div className={classes.cardSectionWrapper}>
                <div className={classes.sectionTitle}>
                    <h3>
                        with the <span>usual suspects</span>
                    </h3>
                </div>
                <div className={classes.cardsContainerWrapper}>
                    <div
                        ref={containerRefProblem}
                        className={cls(classes.cardsContainer, classes.problem)}
                        onMouseDown={handleMouseDown}
                        style={{ cursor: isDragging ? "grabbing" : "grab" }}
                        tabIndex={-1}
                    >
                        {problemCards.map((card) => (
                            <div
                                className={cls(classes.card, classes.problem)}
                                key={card.title}
                            >
                                <div className={classes.cardHeader}>
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={48}
                                        height={48}
                                    />
                                    <h4>{card.title}</h4>
                                </div>
                                <div className={classes.cardContent}>
                                    {card.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    {problemOverflows && (
                        <div className={classes.scrollbarContainer}>
                            <CustomScrollbar
                                containerRef={
                                    containerRefProblem as React.RefObject<HTMLElement>
                                }
                                color="red"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className={classes.cardSectionWrapper}>
                <div className={classes.sectionTitle}>
                    <h3>
                        with <LttleCloudSpan />
                    </h3>
                </div>
                <div className={classes.cardsContainerWrapper}>
                    <div
                        ref={containerRefSolution}
                        className={cls(
                            classes.cardsContainer,
                            classes.solution
                        )}
                        onMouseDown={handleMouseDown}
                        style={{ cursor: isDragging ? "grabbing" : "grab" }}
                        tabIndex={-1}
                    >
                        {solutionCards.map((card) => (
                            <div
                                className={cls(classes.card, classes.solution)}
                                key={card.title}
                            >
                                <div className={classes.cardHeader}>
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={48}
                                        height={48}
                                    />
                                    <h4>{card.title}</h4>
                                </div>
                                <div className={classes.cardContent}>
                                    {card.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    {solutionOverflows && (
                        <div className={classes.scrollbarContainer}>
                            <CustomScrollbar
                                containerRef={
                                    containerRefSolution as React.RefObject<HTMLElement>
                                }
                                color="teal"
                                initialScroll={1}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className={classes.cardSectionWrapper}>
                <div className={classes.sectionTitle}>
                    <h3>
                        <span>our edge</span>
                    </h3>
                </div>
                <div className={classes.cardsContainerWrapper}>
                    <div
                        ref={containerRefAdvantage}
                        className={cls(
                            classes.cardsContainer,
                            classes.advantage
                        )}
                        onMouseDown={handleMouseDown}
                        style={{ cursor: isDragging ? "grabbing" : "grab" }}
                        tabIndex={-1}
                    >
                        {advantageCards.map((card) => (
                            <div
                                className={cls(classes.card, classes.advantage)}
                                key={card.title}
                            >
                                <div className={classes.cardHeader}>
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={48}
                                        height={48}
                                    />
                                    <h4>{card.title}</h4>
                                </div>
                                <div className={classes.cardContent}>
                                    {card.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    {advantageOverflows && (
                        <div className={classes.scrollbarContainer}>
                            <CustomScrollbar
                                containerRef={
                                    containerRefAdvantage as React.RefObject<HTMLElement>
                                }
                                color="cream"
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.specialCard}>
                <div className={classes.cardHeader}>
                    <h4>a fair price. unlike others 🙄</h4>
                </div>
                <div className={classes.cardContent}>
                    <p>
                        why pay for idle? or for compute you&apos;re not using?
                        <br />
                        <br />
                        lttle.cloud is <b>built for true efficiency</b>, so you
                        only pay for what you actually run. no overprovisioning.
                        no mystery pricing.
                        <br />
                        <br />
                        <b>just a fair deal.</b>
                    </p>
                    <Image
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={200}
                        height={200}
                        role="presentation"
                        className={classes.illustration}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionWhyLttleCloud;
