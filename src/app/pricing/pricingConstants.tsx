import { ButtonVariant } from "@/components/button/button";

export const tiers = {
    tier1: {
        name: "Hobby",
        value: "Free",
    },
    tier2: {
        name: "Pro",
        value: "$15/month",
    },
    tier3: {
        name: "Enterprise",
        value: "custom pricing",
    },
};

type PricingCard = {
    title: string;
    description: string;
    price: string;
    buttonText: string;
    buttonVariant: ButtonVariant;
    features: string[];
};

export const cards: PricingCard[] = [
    {
        title: tiers.tier1.name,
        description: "Perfect for prototyping and showcasing side projects",
        price: tiers.tier1.value,
        buttonText: "get started",
        buttonVariant: "primary",
        features: [
            "2 seats across all projects",
            "1M function invocations",
            "15 min function timeout",
            "3 PostgreSQL/MongoDB Databases",
            "Automatic CI/CD",
            "Community support",
        ],
    },
    {
        title: tiers.tier2.name,
        description:
            "For professionals or teams up to 10 people who deploy to production",
        price: tiers.tier2.value,
        buttonText: "start now",
        buttonVariant: "teal",
        features: [
            "2 seats across all projects",
            "1M function invocations",
            "15 min function timeout",
            "3 PostgreSQL/MongoDB Databases",
            "Automatic CI/CD",
            "Community support",
        ],
    },
    {
        title: tiers.tier3.name,
        description: "For large organizations and businesses",
        price: tiers.tier3.value,
        buttonText: "contact us",
        buttonVariant: "red",
        features: [
            "2 seats across all projects",
            "1M function invocations",
            "15 min function timeout",
            "3 PostgreSQL/MongoDB Databases",
            "Automatic CI/CD",
            "Community support",
        ],
    },
];

type PricingTableRow = {
    title: string;
    tier1Value: string | React.ReactNode | null;
    tier2Value: string | React.ReactNode | null;
    tier3Value: string | React.ReactNode | null;
};

type PricingTableCategory = {
    title: string;
    rows: PricingTableRow[];
};

export const tableCategory1Rows: PricingTableRow[] = [
    {
        title: "projects",
        tier1Value: "unlimited (non-commercial or academic)",
        tier2Value: "unlimited",
        tier3Value: "unlimited",
    },
    {
        title: "collaboration",
        tier1Value: "2 seats across all projects (non-commercial or academic)",
        tier2Value: "10 seats across all projects then $15 per additional seat",
        tier3Value: "account management",
    },
    {
        title: "concurrent builds",
        tier1Value: "1",
        tier2Value: "10",
        tier3Value: "custom",
    },
    {
        title: "build minutes",
        tier1Value: "600",
        tier2Value: "24,000",
        tier3Value: "unlimited",
    },
    {
        title: "bandwidth (fe + be)",
        tier1Value: "100 gb",
        tier2Value: "1 tb then starting at $10 per 100 gb",
        tier3Value: "custom",
    },
    {
        title: "serverless function invocations",
        tier1Value: "1,000,000",
        tier2Value: "2,000,000 then starting at $0.40 per 1m",
        tier3Value: "custom",
    },
];

export const tableCategory2Rows: PricingTableRow[] = tableCategory1Rows;

export const tableCategory3Rows: PricingTableRow[] = tableCategory1Rows;

export const tableRows: PricingTableCategory[] = [
    {
        title: "projects",
        rows: tableCategory1Rows,
    },
    {
        title: "collaboration",
        rows: tableCategory2Rows,
    },
    {
        title: "build minutes",
        rows: tableCategory3Rows,
    },
];

type FaqItem = {
    question: string;
    answer: string;
};

export const faqItems: FaqItem[] = [
    {
        question: "Placeholder question 1?",
        answer: "Placeholder answer 1.",
    },
    {
        question: "Placeholder question 2? (with a longer question)",
        answer: "Placeholder answer 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        question: "Placeholder question 3? (with an even longer question)",
        answer: "Placeholder answer 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
];
