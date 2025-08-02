import { readFile } from "fs/promises";

// From kernel formatted lttle proc file
// https://github.com/lttle-cloud/linux/pull/1/files#diff-8650770e4526c02b9abcdea3d59a73a1a369e377f9753f2f47949bc019b23f93
// "{\"last_boot_time_us\": %llu, \"first_boot_time_us\": %llu}"
type Info = {
    first_boot_time_us: number;
    last_boot_time_us: number;
};

async function readInfo(): Promise<Info> {
    try {
        const info = await readFile("/proc/lttle", "utf-8");
        return JSON.parse(info);
    } catch {
        return {
            first_boot_time_us: 0,
            last_boot_time_us: 0,
        };
    }
}

export async function getLastBootTimeUs() {
    const info = await readInfo();
    return info.last_boot_time_us;
}

export async function getLastBootTimeMs() {
    const bootTimeUs = await getLastBootTimeUs();
    return bootTimeUs / 1000;
}
