import { ButtonVariant } from "@/components/button/button";
import { CONTACT_EMAIL, SIGN_UP_URL } from "../constants";

export const tiers = {
    tier1: {
        name: "tiny",
        value: "free",
    },
    tier2: {
        name: "lttle",
        value: "$15/month",
    },
    tier3: {
        name: "custom",
        value: "custom pricing",
    },
};

type PricingCard = {
    title: string;
    description: string;
    price: string;
    buttonText: string;
    buttonLink: string;
    buttonVariant: ButtonVariant;
    features: string[];
};

export const cards: PricingCard[] = [
    {
        title: tiers.tier1.name,
        description: "perfect for your personal projects",
        price: tiers.tier1.value,
        buttonText: "sign up",
        buttonLink: SIGN_UP_URL,
        buttonVariant: "primary",
        features: [
            "500k compute seconds",
            "1GB persistent volumes",
            "100GB egress traffic",
            "10GB ingress traffic",
            "no invocation count limit",
            "no invocation timeout limit",
            "community support",
        ],
    },
    {
        title: tiers.tier2.name,
        description:
            "ready for production?",
        price: tiers.tier2.value,
        buttonText: "sign up",
        buttonLink: SIGN_UP_URL,
        buttonVariant: "teal",
        features: [
            "2M compute seconds included",
            "10GB persistent volumes",
            "1TB egress traffic",
            "unlimited ingress traffic",
            "no invocation count limit",
            "no invocation timeout limit",
            "email and chat support",
        ],
    },
    {
        title: tiers.tier3.name,
        description: "for extra-large needs",
        price: tiers.tier3.value,
        buttonText: "contact us",
        buttonLink: `mailto:${CONTACT_EMAIL}`,
        buttonVariant: "red",
        features: [
            "unlimited compute seconds",
            "unlimited persistent volumes",
            "unlimited egress traffic",
            "unlimited ingress traffic",
            "no invocation count limit",
            "no invocation timeout limit",
            "24/7 support",
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
        title: "active compute units",
        tier1Value: "limited to 3",
        tier2Value: "unlimited",
        tier3Value: "unlimited",
    },
    {
        title: "provisioned compute units",
        tier1Value: "limited to 6",
        tier2Value: "unlimited",
        tier3Value: "unlimited",
    },
    {
        title: "always-on workloads",
        tier1Value: "none",
        tier2Value: "unlimited",
        tier3Value: "unlimited",
    },
    {
        title: "compute seconds",
        tier1Value: "limited to 500k",
        tier2Value: "2M included; 0.0000045$/second after",
        tier3Value: "custom",
    },
];

export const tableCategory2Rows: PricingTableRow[] = [
    {
        title: "image storage",
        tier1Value: "limited to 2GB",
        tier2Value: "10GB included; 0.03$/GB after",
        tier3Value: "custom",
    },
    {
        title: "persistent volume size",
        tier1Value: "limited to 1GB",
        tier2Value: "10GB included; 0.03$/GB after",
        tier3Value: "custom",
    },
    {
        title: "egress traffic",
        tier1Value: "limited to 100GB",
        tier2Value: "1TB included; 0.03$/GB after",
        tier3Value: "unlimited",
    },
    {
        title: "ingress traffic",
        tier1Value: "limited to 10GB",
        tier2Value: "unlimited",
        tier3Value: "unlimited",
    },
];

export const tableCategory3Rows: PricingTableRow[] = [
    {
        title: "users",
        tier1Value: "unlimited",
        tier2Value: "unlimited",
        tier3Value: "unlimited",
    },
    {
        title: "API access",
        tier1Value: "yes",
        tier2Value: "yes",
        tier3Value: "yes",
    },
    {
        title: "self-hosting",
        tier1Value: "yes",
        tier2Value: "yes",
        tier3Value: "yes",
    },
    {
        title: "support",
        tier1Value: "community",
        tier2Value: "chat/email",
        tier3Value: "24/7",
    },
];

export const tableRows: PricingTableCategory[] = [
    {
        title: "compute",
        rows: tableCategory1Rows,
    },
    {
        title: "data",
        rows: tableCategory2Rows,
    },
    {
        title: "features",
        rows: tableCategory3Rows,
    },
];

type FaqItem = {
    question: string;
    answer: string;
};

export const faqItems: FaqItem[] = [
    {
        question: "what is a compute unit?",
        answer: "a compute unit is a slice of cpu and memory that is used by your application. it is the smallest unit of compute that you can provision. 1cu = 0.5vcpu and 1gb of memory.",
    },
    {
        question: "what is a compute second?",
        answer: "a compute second is the amount of time your application is using a compute unit. 1 compute second = 1cu * 1 second.",
    },
    {
        question: "what is the difference between an active and a provisioned compute unit?",
        answer: "an active compute unit is a compute unit that is currently being used by your application. a provisioned compute unit is a compute unit that is allocated to your application but not currently being used. when your application is suspended, it does not consume any active compute units. however, it will still consume provisioned compute units.",
    },
    {
        question: "0.0000045$/second? that must be a typo.",
        answer: "no, that is not a typo. the price is $0.0000045 per second per compute unit. this is about 3x cheaper than aws lambda for the same amount of compute.",
    },
    {
        question: "do I need a credit card to get started?",
        answer: "no, you can start using our platform without a credit card. however, you will need a credit card to use our platform if you exceed the free tier limits.",
    },
];
