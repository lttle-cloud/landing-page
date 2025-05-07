import { forwardRef } from "react";
import classes from "./button.module.scss";
import { cls } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "teal" | "red" | "purple" | "blue";
    width?: "full" | "fit";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, children, variant = "primary", width = "fit", ...props },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={cls(
                    classes.root,
                    classes[variant],
                    width === "full" ? classes.full : "",
                    className ?? ""
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
