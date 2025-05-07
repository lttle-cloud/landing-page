import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src")],
        prependData: `@use "styles/variables.scss" as *;`,
    },
};

export default nextConfig;
