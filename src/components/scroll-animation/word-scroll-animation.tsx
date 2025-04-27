import React, { useState, useEffect } from "react";
import classes from "./word-scroll-animation.module.scss";
import { cls } from "@/lib/utils";

type WordScrollAnimationProps = {
    words: string[];
    scrollDuration: number;
    pauseTime: number;
};

const WordScrollAnimation = ({
    words,
    scrollDuration = 500, // Duration of scroll animation in ms
    pauseTime = 2000, // Time to pause between words in ms
}: WordScrollAnimationProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [biggestWidth, setBiggestWidth] = useState(0);

    useEffect(() => {
        for (let i = 0; i < words.length; i++) {
            const word = document.getElementById(`word-${i}`);
            if (word && word.offsetWidth > biggestWidth) {
                setBiggestWidth(word.offsetWidth);
            }
        }
    }, [biggestWidth, words]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, scrollDuration + pauseTime);

        return () => clearInterval(interval);
    }, [words.length, scrollDuration, pauseTime]);

    return (
        <span
            className={classes.container}
            style={{
                width: `calc(${biggestWidth}px + 1rem)`,
            }}
        >
            {words.map((word, index) => {
                const isActive = index === currentWordIndex;
                const isNext = index === (currentWordIndex + 1) % words.length;
                const isPrev =
                    index ===
                    (currentWordIndex - 1 + words.length) % words.length;

                return (
                    <div
                        id={`word-${index}`}
                        key={index}
                        className={cls(
                            classes.word,
                            isNext
                                ? classes.nextWord
                                : isPrev
                                ? classes.prevWord
                                : isActive
                                ? classes.activeWord
                                : classes.hidden
                        )}
                    >
                        {word}
                    </div>
                );
            })}
        </span>
    );
};

export default WordScrollAnimation;
