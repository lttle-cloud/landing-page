import { useEffect, useState } from "react";
import classes from "./typewriter-animation.module.scss";

type TypewriterAnimationProps = {
    words: string[];
    typingSpeed: number;
    deletingSpeed: number;
    pauseTime: number;
};

const TypewriterAnimation = ({
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
}: TypewriterAnimationProps) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [delta, setDelta] = useState(typingSpeed);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
                setDelta(deletingSpeed);
            } else {
                setText(currentWord.substring(0, text.length + 1));
                setDelta(typingSpeed);
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, delta);

        return () => clearTimeout(timeout);
    }, [
        text,
        isDeleting,
        wordIndex,
        delta,
        deletingSpeed,
        pauseTime,
        typingSpeed,
        words,
    ]);

    return <span className={classes.container}>{text}</span>;
};

export default TypewriterAnimation;
