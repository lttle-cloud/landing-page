import Marquee from "react-fast-marquee";
import styles from "./shapes-marquee.module.scss";

const ShapesMarquee = () => {
    // Create an array of numbers from 1 to 18
    const shapes = Array.from({ length: 18 }, (_, i) => i + 1);

    return (
        <Marquee gradient={false} speed={25} autoFill={true}>
            <div className={styles.shapesContainer}>
                {shapes.map((num) => (
                    <img
                        key={num}
                        src={`/assets/shapes/shape${num}.svg`}
                        alt={`Shape ${num}`}
                    />
                ))}
            </div>
        </Marquee>
    );
};

export default ShapesMarquee;
