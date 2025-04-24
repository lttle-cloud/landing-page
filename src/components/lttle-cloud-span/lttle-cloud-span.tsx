import classes from "./lttle-cloud-span.module.scss";

const LttleCloudSpan = () => {
    return (
        <span className={classes.root}>
            <span className={classes.lttle}>lttle</span>
            <span className={classes.dot}>.</span>
            <span className={classes.cloud}>cloud</span>
        </span>
    );
};

export default LttleCloudSpan;
