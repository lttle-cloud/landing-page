import { readFile } from "fs/promises";

type Info = {
    boot_time_us: number;
};

async function readInfo(): Promise<Info> {
    try {
        const info = await readFile("/proc/lttle", "utf-8");
        return JSON.parse(info);
    } catch {
        return {
            boot_time_us: 0,
        };
    }
}

export async function getBootTimeUs() {
    const info = await readInfo();
    return info.boot_time_us;
}

export async function getBootTimeMs() {
    const bootTimeUs = await getBootTimeUs();
    return bootTimeUs / 1000;
}
