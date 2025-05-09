import PageHeader from "@/components/page-header/page-header";
import aboutUsClasses from "./about-us.module.scss";
import rootClasses from "../root.module.scss";
import PageFooter from "@/components/page-footer/page-footer";
import Separator from "@/components/separator/separator";
import Image from "next/image";
import { cls } from "@/lib/utils";
import LttleCloudSpan from "@/components/lttle-cloud-span/lttle-cloud-span";
import Button from "@/components/button/button";
import ShapesMarquee from "@/components/shapes-marquee/shapes-marquee";
import Link from "next/link";
import { CONTACT_EMAIL, IGNITION_URL } from "../constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About lttle.cloud",
    description:
        "Learn more about lttle.cloud and our mission to build a better cloud infrastructure.",
};

export default function AboutUs() {
    return (
        <div className={rootClasses.root}>
            <PageHeader />

            <main className={rootClasses.main}>
                <section className={aboutUsClasses.hero}>
                    <div className={aboutUsClasses.heroContent}>
                        <div className={aboutUsClasses.heroText}>
                            <div className={aboutUsClasses.titleContainer}>
                                <h1>
                                    the business enabler for product developers
                                </h1>
                                <p>
                                    we’re building a cloud that stays out of
                                    your way
                                </p>
                            </div>
                            <Separator
                                width="100px"
                                height="8px"
                                color="teal"
                            />
                            <p>
                                <b>@ lttle.cloud</b>, we believe infrastructure
                                should be invisible until you need it and
                                intuitive when you do. 
                                <br />
                                <br />
                                we’re building an open-source cloud platform
                                that enables business for product developers. no
                                cold starts, no lock-in or gatekeepers, and no
                                runaway bills.
                                <br />
                                <br />
                                we’re not here to compete with the hyperscalers
                                by playing their game.  we&apos;re here because
                                the game has changed, and the cloud needs to
                                adapt.
                            </p>
                        </div>
                        <Image
                            className={aboutUsClasses.heroImage}
                            src="/assets/images/illustration-about-us.svg"
                            alt="about us"
                            width={600}
                            height={600}
                        />
                    </div>
                </section>

                <section
                    className={cls(aboutUsClasses.section, aboutUsClasses.gray)}
                >
                    <div className={aboutUsClasses.sectionContent}>
                        <div className={aboutUsClasses.titleContainer}>
                            <h2>
                                shaped for the <span>real world</span>
                            </h2>
                            <Separator
                                width="100px"
                                height="8px"
                                color="pink"
                            />
                        </div>
                        <p>
                            we shape our work around the real needs of
                            developers, engineers, and startups solving hard
                            problems under tight constraints. we ship what
                            matters: stable primitives, well-scoped
                            functionality, and sharp boundaries.
                            <br />
                            <br />
                            our product decisions start with appetite: how much
                            time is this worth? how much complexity is
                            justified? if we wouldn’t bet six weeks of our own
                            time on it, we don’t build it.
                        </p>
                    </div>
                </section>

                <section className={aboutUsClasses.section}>
                    <div className={aboutUsClasses.sectionContent}>
                        <div
                            className={cls(
                                aboutUsClasses.titleContainer,
                                aboutUsClasses.right
                            )}
                        >
                            <h2>built with trust and autonomy</h2>
                            <Separator width="100px" height="8px" color="red" />
                        </div>
                        <p>
                            we’re a team of engineers, designers, growth
                            professionals, community afficionados and builders
                            who own our work from start to finish. that means no
                            handoffs, no waterfall, and no one waiting around
                            for permission. when we commit to a cycle, we shape
                            the work, define the boundaries, and ship it. if we
                            can’t confidently shape it, it doesn’t make the cut.
                            <br />
                            <br />
                            lttle.cloud is built in cycles.
                            <br />
                            <br />
                            not sprints. that gives us space to think deeply,
                            cut sharply, and ship something solid.
                        </p>
                    </div>
                </section>

                <section
                    className={cls(
                        aboutUsClasses.section,
                        aboutUsClasses.gray,
                        aboutUsClasses.largePadding
                    )}
                >
                    <div className={aboutUsClasses.sectionContent}>
                        <div className={aboutUsClasses.titleContainer}>
                            <h2>
                                why <LttleCloudSpan />?
                            </h2>
                            <Separator
                                width="100px"
                                height="8px"
                                color="purple"
                            />
                        </div>
                        <p>
                            it’s a nod to the small teams doing big things. to
                            the individual dev who spins up an idea on a
                            weekend. to the indie hacker pushing the limits of
                            what one person can build. to the communities
                            reclaiming ownership of their tools.
                            <br />
                            <br />
                            <b>lttle.cloud is for you.</b>
                        </p>

                        <div className={aboutUsClasses.card}>
                            <div className={aboutUsClasses.cardTitle}>
                                <h2>join us</h2>
                                <p>
                                    if you believe the future of cloud is open,
                                    composable, and owned by builders, <br />
                                    <b>come help shape it.</b>
                                </p>
                            </div>

                            <div className={aboutUsClasses.ctaButtonContainer}>
                                <Link href={`mailto:${CONTACT_EMAIL}`}>
                                    <Button variant="teal">contact us</Button>
                                </Link>
                                <Link href={IGNITION_URL} target="_blank">
                                    <Button tabIndex={-1}>github</Button>
                                </Link>
                                <Link href="/careers">
                                    <Button variant="red">careers</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <ShapesMarquee />
            <PageFooter />
        </div>
    );
}
