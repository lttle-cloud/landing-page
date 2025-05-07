"use client";

import { useState } from "react";
import Button from "../button/button";
import LttleCloudSpan from "../lttle-cloud-span/lttle-cloud-span";
import Separator from "../separator/separator";
import Tabs from "../tabs/tabs";
import classes from "./section-get-started.module.scss";

const tabs = ["terminal power", "vibe devops"];

const SectionGetStarted = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <section className={classes.root} id="get-started">
            <div className={classes.content}>
                <div className={classes.subSection}>
                    <div className={classes.titleContainer}>
                        <h2>
                            get started with <LttleCloudSpan />
                        </h2>
                        <Separator width="100px" height="8px" color="teal" />
                        <p>
                            lttle.cloud is the cloud you’d build yourself
                            <br /> * [ if you had the time, the rage, and the
                            resources ]
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
                                <br />
                                get hands-on access to instant workloads, true
                                pay-for-what-you-use pricing, and a developer
                                experience that works beautifully.
                            </p>
                            <Button
                                variant="secondary"
                                className={classes.button}
                            >
                                sign up here
                            </Button>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.cardHeader}>
                                <h3>option 2</h3>
                                <h4>self-host it</h4>
                            </div>
                            <p>
                                prefer to run your own stack?
                                <br />
                                <br />
                                check out our github for setup instructions,
                                source code, and everything you need to launch
                                your own cloud.
                            </p>
                            <Button
                                variant="secondary"
                                className={classes.button}
                            >
                                github
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={classes.subSection} id="how-it-works">
                    <div className={classes.titleContainer}>
                        <h2>setup is easy</h2>
                        <p>
                            whether you love the terminal or prefer a fully
                            AI-powered flow, getting your app live on
                            lttle.cloud takes just a few steps.
                            <br />
                            pick your vibe and start deploying.
                        </p>
                    </div>

                    <Tabs
                        tabs={tabs}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    >
                        {activeTab === tabs[0] && (
                            <div className={classes.tabContent}>
                                <h2>
                                    prefer the CLI? get up and running in
                                    seconds.
                                </h2>
                                <ul>
                                    <li>
                                        <div className={classes.itemTitle}>
                                            <span>1.</span>
                                            <p>install the CLI</p>
                                        </div>
                                        <p>
                                            🔒 sign up for early access for
                                            installation instructions
                                        </p>
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
                                <h2>
                                    want to deploy straight from Claude Desktop,
                                    Cursor, or any AI tool with MCP support?
                                </h2>
                                <ul>
                                    <li>
                                        <div className={classes.itemTitle}>
                                            <span>1.</span>
                                            <p>install the MCP plugin</p>
                                        </div>
                                        <p>
                                            🔒 sign up for early access for
                                            installation instructions
                                        </p>
                                    </li>
                                    <li>
                                        <div className={classes.itemTitle}>
                                            <span>2.</span>
                                            <p>connect</p>
                                        </div>
                                        <p>
                                            sign in with your lttle.cloud
                                            account
                                        </p>
                                    </li>
                                    <li>
                                        <div className={classes.itemTitle}>
                                            <span>3.</span>
                                            <p>just ask your AI tool</p>
                                        </div>
                                        <p>
                                            &quot;deploy this app to
                                            lttle.&quot;
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default SectionGetStarted;
