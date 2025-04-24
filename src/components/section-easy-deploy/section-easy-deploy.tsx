import { cls } from "@/lib/utils";
import Separator from "../separator/separator";
import classes from "./section-easy-deploy.module.scss";

const SectionEasyDeploy = () => {
    return (
        <section className={classes.root}>
            <div className={classes.titleContainer}>
                <h2>easy deploy</h2>
                <Separator width="100px" height="8px" color="teal" />
                <p>
                    cute subtitle about getting started here maybe hmm,
                    something about this long yeah seems right
                    <br /> maybe a couple of paragraphs hmmm
                </p>
            </div>
            <div className={classes.card}>
                <div className={classes.block}>
                    <p>
                        deploy your <span>web app</span> in seconds
                    </p>
                    <p>any Docker image.</p>
                    <p>zero config.</p>
                </div>
                <div className={cls(classes.block, classes.block2)}>
                    <p>just run:</p>
                    <code className={classes.code}>lttle deploy</code>
                </div>
                <p className={classes.centered}>that&apos;s it.</p>
            </div>
        </section>
    );
};

export default SectionEasyDeploy;
