import { MS_BANNER_SOURCE_URL } from "@/app/constants";
import classes from "./top-banner.module.scss";

type TopBannerProps = {
    time: number;
};

const TopBanner = ({ time }: TopBannerProps) => {
    return (
        <a className={classes.root} href={MS_BANNER_SOURCE_URL}>
            this webpage was served to you by a virtual machine that was
            cold-booted in <span>{time.toFixed(3)}</span>ms.
        </a>
    );
};

export default TopBanner;
