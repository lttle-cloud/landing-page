import PageFooter from "@/components/page-footer/page-footer";
import PageHeader from "@/components/page-header/page-header";
import ShapesMarquee from "@/components/shapes-marquee/shapes-marquee";
import { Metadata } from "next";
import rootClasses from "../root.module.scss";
import pricingClasses from "./pricing.module.scss";
import Button from "@/components/button/button";
import { cls } from "@/lib/utils";
import { cards, tableRows, tiers } from "./pricingConstants";
import FaqSection from "./faq-section";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Learn more about lttle.cloud and our mission to build a better cloud infrastructure.",
};

export default function Pricing() {
    return (
        <div className={rootClasses.root}>
            <PageHeader />

            <main className={cls(rootClasses.main, pricingClasses.main)}>
                <section className={pricingClasses.cardsSection}>
                    <div className={pricingClasses.cardsContainer}>
                        {cards.map((card) => (
                            <div
                                className={pricingClasses.card}
                                key={card.title}
                            >
                                <div
                                    className={
                                        pricingClasses.descriptionContainer
                                    }
                                >
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                    <p className={pricingClasses.price}>
                                        {card.price}
                                    </p>
                                </div>
                                <Button
                                    variant={card.buttonVariant}
                                    href={card.buttonLink}
                                >
                                    {card.buttonText}
                                </Button>
                                <div
                                    className={pricingClasses.featuresContainer}
                                >
                                    <h3>what you&apos;ll get</h3>
                                    <ul>
                                        {card.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={pricingClasses.tableSection}>
                    <div className={pricingClasses.titleContainer}>
                        <h2>compare our offers</h2>
                        <p>
                            little subtitle maybe to make the thing look
                            prettier
                        </p>
                    </div>
                    <div className={pricingClasses.tableContainer}>
                        {tableRows.map((category, index) => (
                            <div
                                key={category.title}
                                className={pricingClasses.categoryTableWrapper}
                            >
                                {index === 0 && (
                                    <div
                                        className={
                                            pricingClasses.tableWrapperHeader
                                        }
                                    >
                                        <h3>
                                            Compare our monthly plans in detail
                                        </h3>
                                        <div>hobby</div>
                                        <div>pro</div>
                                        <div>enterprise</div>
                                    </div>
                                )}
                                <div className={pricingClasses.pricingTable}>
                                    <div>
                                        <div>
                                            <div
                                                className={
                                                    pricingClasses.categoryHeader
                                                }
                                            >
                                                {category.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={pricingClasses.tableBody}>
                                        {category.rows.map((row) => (
                                            <div
                                                key={row.title}
                                                className={
                                                    pricingClasses.tableRow
                                                }
                                            >
                                                <div
                                                    className={cls(
                                                        pricingClasses.tableData,
                                                        pricingClasses.featureName
                                                    )}
                                                >
                                                    {row.title}
                                                </div>
                                                <div
                                                    className={
                                                        pricingClasses.tableData
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            pricingClasses.tierName
                                                        }
                                                    >
                                                        {tiers.tier1.name}
                                                    </div>
                                                    <div
                                                        className={
                                                            pricingClasses.tierValue
                                                        }
                                                    >
                                                        <div>
                                                            {row.tier1Value}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        pricingClasses.tableData
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            pricingClasses.tierName
                                                        }
                                                    >
                                                        {tiers.tier2.name}
                                                    </div>
                                                    <div
                                                        className={
                                                            pricingClasses.tierValue
                                                        }
                                                    >
                                                        <div>
                                                            {row.tier2Value}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        pricingClasses.tableData
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            pricingClasses.tierName
                                                        }
                                                    >
                                                        {tiers.tier3.name}
                                                    </div>
                                                    <div
                                                        className={
                                                            pricingClasses.tierValue
                                                        }
                                                    >
                                                        <div>
                                                            {row.tier3Value}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <FaqSection />
            </main>

            <ShapesMarquee />
            <PageFooter />
        </div>
    );
}
