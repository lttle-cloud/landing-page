"use client";

import { useState } from "react";
import Button from "../button/button";
import LttleCloudSpan from "../lttle-cloud-span/lttle-cloud-span";
import Separator from "../separator/separator";
import Tabs from "../tabs/tabs";
import classes from "./section-get-started.module.scss";

const tabs = ["with the terminal", "vibe coding"];

const SectionGetStarted = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <section className={classes.root}>
            <div className={classes.content}>
                <div className={classes.titleContainer}>
                    <h2>
                        get started with <LttleCloudSpan />
                    </h2>
                    <Separator width="100px" height="8px" color="teal" />
                    <p>
                        cute subtitle about getting started here maybe hmm,
                        something about this long yeah seems right
                        <br /> maybe a couple of paragraphs hmmm
                    </p>
                </div>
                <div className={classes.cardsContainer}>
                    <div className={classes.card}>
                        <div className={classes.cardHeader}>
                            <h3>option 1</h3>
                            <h4>sign-up for early access</h4>
                        </div>
                        <p>
                            be among the firsts to try{" "}
                            <strong>lttle.cloud</strong>
                            <br />
                            <br /> receive updates and here's another paragraph
                            to make this look a bit fuller because one line of
                            text doesn't look like enough
                        </p>
                        <Button variant="secondary" className={classes.button}>
                            sign up here
                        </Button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardHeader}>
                            <h3>option 2</h3>
                            <h4>self-host it</h4>
                        </div>
                        <p>
                            prefer to run your own stack? <br /> check out our
                            github for setup and source.
                        </p>
                        <Button variant="secondary" className={classes.button}>
                            github
                        </Button>
                    </div>
                </div>

                <div className={classes.titleContainer}>
                    <h2>setup is easy</h2>
                    <p>
                        cute subtitle about getting started here maybe hmm,
                        something about this long yeah seems right
                        <br /> maybe a couple of paragraphs hmmm
                    </p>
                </div>

                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                >
                    {activeTab === tabs[0] && (
                        <div className={classes.tabContent}>
                            <ul>
                                <li>
                                    <div className={classes.itemTitle}>
                                        <span>1.</span>
                                        <p>sign up</p>
                                    </div>
                                    <p>sign up for early access</p>
                                </li>
                                <li>
                                    <div className={classes.itemTitle}>
                                        <span>2.</span>
                                        <p>connect</p>
                                    </div>
                                    <div className={classes.codeBlock}>
                                        <p>lttle login</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.itemTitle}>
                                        <span>3.</span>
                                        <p>deploy</p>
                                    </div>
                                    <div className={classes.codeBlock}>
                                        <p>lttle deploy</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}

                    {activeTab === tabs[1] && (
                        <div className={classes.tabContent}>
                            <ul>
                                <li>
                                    <div className={classes.itemTitle}>
                                        <span>1.</span>
                                        <p>sign up</p>
                                    </div>
                                    <p>install the MCP plugin</p>
                                </li>
                                <li>
                                    <div className={classes.itemTitle}>
                                        <span>2.</span>
                                        <p>connect</p>
                                    </div>
                                    <div className={classes.codeBlock}>
                                        <p>lttle login</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.itemTitle}>
                                        <span>3.</span>
                                        <p>deploy</p>
                                    </div>
                                    <p>
                                        just ask your AI tool to deploy your app
                                        to lttle
                                    </p>
                                </li>
                            </ul>
                        </div>
                    )}
                </Tabs>
            </div>
        </section>
    );
};

export default SectionGetStarted;
