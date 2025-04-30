import classes from "./page.module.scss";
import PageHeader from "@/components/page-header/page-header";
import PageFooter from "@/components/page-footer/page-footer";
import SectionHero from "@/components/section-hero/section-hero";
// import SectionEasyDeploy from "@/components/section-easy-deploy/section-easy-deploy";
import SectionGetStarted from "@/components/section-get-started/section-get-started";
import ShapesMarquee from "@/components/shapes-marquee/shapes-marquee";
import SectionWhyLttleCloud from "@/components/section-why-lttle-cloud/section-why-lttle-cloud";
import SectionVibeDevops from "@/components/section-vibe-devops/section-vibe-devops";
import TopBanner from "@/components/top-banner/top-banner";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "lttle.cloud",
    description: "no cold starts. no middle layers. no vendor traps.",
    keywords: [
        "lttle.cloud",
        "lttle",
        "cloud",
        "lttle cloud",
        "lttle cloud services",
    ],
    openGraph: {
        title: "lttle.cloud",
        description: "no cold starts. no middle layers. no vendor traps.",
        images: ["/public/assets/images/og-image.png"],
    },
};

export default function Home() {
    return (
        <div className={classes.root}>
            <TopBanner time={1.215} />
            <PageHeader />
            <main className={classes.main}>
                <SectionHero />
                {/* <SectionEasyDeploy /> */}
                <SectionGetStarted />
                <ShapesMarquee />
                <SectionWhyLttleCloud />
                <SectionVibeDevops />
                <ShapesMarquee />
            </main>
            <PageFooter />
        </div>
    );
}
