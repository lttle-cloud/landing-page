import rootClasses from "./root.module.scss";
import PageHeader from "@/components/page-header/page-header";
import PageFooter from "@/components/page-footer/page-footer";
import SectionHero from "@/components/section-hero/section-hero";
import SectionGetStarted from "@/components/section-get-started/section-get-started";
import ShapesMarquee from "@/components/shapes-marquee/shapes-marquee";
import SectionWhyLttleCloud from "@/components/section-why-lttle-cloud/section-why-lttle-cloud";
import SectionVibeDevops from "@/components/section-vibe-devops/section-vibe-devops";
import TopBanner from "@/components/top-banner/top-banner";
import { getLastBootTimeMs } from "./lib/lttle";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "lttle.cloud",
    description: "no rewrites. no cold starts. no paying for idle.",
    keywords: [
        "lttle.cloud",
        "lttle",
        "cloud",
        "lttle cloud",
        "lttle cloud services",
    ],
    openGraph: {
        title: "lttle.cloud",
        description: "no rewrites. no cold starts. no paying for idle.",
        images: ["/public/assets/images/og-image.png"],
    },
};

export default async function Home() {
    const bootTimeMs = await getLastBootTimeMs();

    return (
        <div className={rootClasses.root}>
            <TopBanner time={bootTimeMs} />
            <PageHeader />
            <main className={rootClasses.main}>
                <SectionHero />
                <SectionGetStarted />
                <ShapesMarquee direction="right" />
                <SectionWhyLttleCloud />
                <SectionVibeDevops />
                <ShapesMarquee direction="left" />
            </main>
            <PageFooter />
        </div>
    );
}
