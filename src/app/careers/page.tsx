import { Metadata } from "next";
import CareersClient from "./careers-client";

export const metadata: Metadata = {
    title: "Careers at lttle.cloud",
    description:
        "Join our team and help build the future of cloud infrastructure.",
};

export default function Careers() {
    return <CareersClient />;
}
