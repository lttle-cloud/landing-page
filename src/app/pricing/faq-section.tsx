"use client";

import { useState } from "react";
import pricingClasses from "./pricing.module.scss";
import { faqItems } from "@/app/pricing/pricingConstants";
import Image from "next/image";

export default function FaqSection() {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleItem = (question: string) => {
        setExpandedItems((prev) =>
            prev.includes(question)
                ? prev.filter((item) => item !== question)
                : [...prev, question]
        );
    };

    return (
        <section className={pricingClasses.faqSection}>
            <div className={pricingClasses.faqHeader}>
                <h2>your questions answered</h2>
            </div>

            <div className={pricingClasses.faqContainer}>
                {faqItems.map((item) => (
                    <div key={item.question} className={pricingClasses.faqItem}>
                        <button onClick={() => toggleItem(item.question)}>
                            <Image
                                className={
                                    expandedItems.includes(item.question)
                                        ? ""
                                        : pricingClasses.arrowDown
                                }
                                src="/assets/icons/arrow-up.svg"
                                alt="arrow up"
                                width={24}
                                height={24}
                            />

                            {item.question}
                        </button>
                        {expandedItems.includes(item.question) && (
                            <div className={pricingClasses.faqAnswer}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
