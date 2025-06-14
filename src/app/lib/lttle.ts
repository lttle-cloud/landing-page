import { readFile } from "fs/promises";

type Info = {
    boot_time_us: number;
};

async function readInfo(): Promise<Info> {
    try {
        // https://github.com/lttle-cloud/linux/pull/1/files#diff-8650770e4526c02b9abcdea3d59a73a1a369e377f9753f2f47949bc019b23f93
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
