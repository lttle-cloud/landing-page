import classes from "./separator.module.scss";

interface SeparatorProps {
    width?: string;
    height?: string;
    color?: "teal" | "pink" | "red" | "purple";
}

const Separator = ({ width, height, color }: SeparatorProps) => {
    return (
        <div
            className={`${classes.root} ${color ? classes[color] : ""}`}
            style={{
                width: width,
                height: height,
            }}
        ></div>
    );
};

export default Separator;
