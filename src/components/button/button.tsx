import { cls } from "@/lib/utils";
import classes from "./button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
}

const Button = ({
    children,
    onClick,
    className,
    variant = "primary",
}: ButtonProps) => {
    return (
        <button
            className={cls(classes.root, className ?? "", classes[variant])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
