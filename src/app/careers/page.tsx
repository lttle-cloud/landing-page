"use client";

import Button from "@/components/button/button";
import Separator from "@/components/separator/separator";
import Image from "next/image";
import rootClasses from "../root.module.scss";
import PageHeader from "@/components/page-header/page-header";
import PageFooter from "@/components/page-footer/page-footer";
import careersClasses from "./careers.module.scss";
import Link from "next/link";
import ShapesMarquee from "@/components/shapes-marquee/shapes-marquee";
import { CONTACT_EMAIL } from "../constants";

interface Job {
    title: string;
    department: string;
    position: string;
    location: string;
    description: React.ReactNode;
}

const jobs: Job[] = [
    {
        title: "Cloud Operations Engineer / SRE",
        department: "operations",
        position:
            "operate, maintain, and scale our bare metal fleet to support a decentralized cloud infrastructure.",
        location: "remote — us or eu",
        description: (
            <>
                <h4>what you&apos;ll do:</h4>
                <ul>
                    <li>
                        manage and monitor bare metal servers across global
                        locations
                    </li>
                    <li>
                        automate deployment, monitoring, and recovery processes
                    </li>
                    <li>
                        ensure high availability, security, and performance
                        across the network
                    </li>
                    <li>
                        collaborate closely with system engineers and network
                        teams
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Systems Engineer",
        department: "development",
        position:
            "build and evolve the core components of lttle.cloud, including ignition, proxy, cli, and the internal runtime.",
        location: "remote — us or eu",
        description: (
            <>
                <h4>what you&apos;ll do:</h4>
                <ul>
                    <li>
                        design and implement low-latency, high-reliability
                        system software
                    </li>
                    <li>
                        improve the core runtime that powers sub-10ms workload
                        startup
                    </li>
                    <li>
                        contribute to cli tools, internal proxies, and network
                        fabric systems
                    </li>
                    <li>
                        write clean, efficient, and highly-performant rust and
                        go code
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Frontend Engineer",
        department: "development",
        position:
            "build intuitive, responsive cloud management uis that make decentralized infrastructure feel effortless.",
        location: "remote — us or eu",
        description: (
            <>
                <h4>what you&apos;ll do:</h4>
                <ul>
                    <li>
                        design and develop user interfaces for cloud resource
                        management
                    </li>
                    <li>
                        create dashboards, monitoring tools, and deploy flows
                    </li>
                    <li>
                        work closely with ux designers, backend engineers, and
                        operations teams
                    </li>
                    <li>
                        build with modern frameworks (react, next.js, tailwind)
                        and maintain excellent performance standards
                    </li>
                </ul>
            </>
        ),
    },
];

export default function Careers() {
    const goToOpenRoles = () => {
        window.location.href = "#open-roles";
    };
    return (
        <div className={rootClasses.root}>
            <PageHeader />

            <main className={rootClasses.main}>
                <section className={careersClasses.hero}>
                    <div className={careersClasses.heroContent}>
                        <div className={careersClasses.heroText}>
                            <div className={careersClasses.titleContainer}>
                                <h1>want to join us?</h1>
                                <Separator
                                    width="100px"
                                    height="8px"
                                    color="teal"
                                />
                                <p>
                                    cute subtitle about getting started here
                                    maybe hmm, something about this long yeah
                                    seems right
                                    <br /> maybe a couple of paragraphs hmmm
                                </p>
                            </div>
                            <div>
                                <Button variant="teal" onClick={goToOpenRoles}>
                                    see open roles
                                </Button>
                            </div>
                        </div>
                        <Image
                            className={careersClasses.heroImage}
                            src="/assets/images/illustration-careers.svg"
                            alt="careers"
                            width={600}
                            height={600}
                        />
                    </div>
                </section>
                <section className={careersClasses.jobsList} id="open-roles">
                    <div className={careersClasses.listTitle}>
                        <h2>open positions</h2>
                        <p>
                            cute subtitle about getting started here maybe hmm,
                            something about this long yeah seems right
                            <br /> maybe a couple of paragraphs hmmm
                        </p>
                    </div>
                    <div className={careersClasses.list}>
                        {jobs.map((job, index) => (
                            <div key={index} className={careersClasses.jobCard}>
                                <h3>{job.title}</h3>
                                <div className={careersClasses.positionMeta}>
                                    <span>
                                        <span
                                            className={
                                                careersClasses.attributeTitle
                                            }
                                        >
                                            department:
                                        </span>{" "}
                                        {job.department}
                                    </span>
                                    <span>
                                        <span
                                            className={
                                                careersClasses.attributeTitle
                                            }
                                        >
                                            position:
                                        </span>{" "}
                                        {job.position}
                                    </span>
                                    <span>
                                        <span
                                            className={
                                                careersClasses.attributeTitle
                                            }
                                        >
                                            location:
                                        </span>{" "}
                                        {job.location}
                                    </span>
                                </div>
                                <div
                                    className={
                                        careersClasses.positionDescription
                                    }
                                >
                                    {job.description}
                                </div>
                                <div
                                    className={
                                        careersClasses.ctaButtonContainer
                                    }
                                >
                                    <Link
                                        href={`mailto:${CONTACT_EMAIL}?subject=Application for ${job.title}`}
                                    >
                                        <Button variant="secondary">
                                            apply now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <ShapesMarquee />
            <PageFooter />
        </div>
    );
}
