import Marquee from "react-fast-marquee";
import styles from "./shapes-marquee.module.scss";

type ShapesMarqueeProps = {
    direction?: "left" | "right";
};

const ShapesMarquee = ({ direction }: ShapesMarqueeProps) => {
    const shapes = Array.from({ length: 18 }, (_, i) => i + 1);

    return (
        <Marquee
            gradient={false}
            speed={25}
            autoFill={true}
            direction={direction}
        >
            <div className={styles.shapesContainer}>
                {shapes.map((num) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={num}
                        src={`/assets/shapes/shape${num}.svg`}
                        alt={`Shape ${num}`}
                        role="presentation"
                    />
                ))}
            </div>
        </Marquee>
    );
};

export default ShapesMarquee;
