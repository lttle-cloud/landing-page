import classes from "./top-banner.module.scss";

type TopBannerProps = {
    time: number;
};

const TopBanner = ({ time }: TopBannerProps) => {
    return (
        <div className={classes.root}>
            this webpage was served to you by a virtual machine that was
            cold-booted in <span>{time.toFixed(3)}</span>ms.
        </div>
    );
};

export default TopBanner;
