import { redirect } from "next/navigation";

import { CURRENT_HACKATHON_URL } from "@/app/constants";

export default function Hack() {
    redirect(CURRENT_HACKATHON_URL);
}