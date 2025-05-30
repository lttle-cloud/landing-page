'use client';

import { forwardRef } from "react";
import classes from "./button.module.scss";
import { cls } from "@/lib/utils";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "teal"
    | "red"
    | "purple"
    | "blue";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    variant?: ButtonVariant;
    width?: "full" | "fit";
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, children, variant = "primary", width = "fit", ...props },
        ref
    ) => {
        const onClick = props.href
            ? () => {
                  window.open(props.href, "_blank");
              }
            : props.onClick;

        return (
            <button
                ref={ref}
                className={cls(
                    classes.root,
                    classes[variant],
                    width === "full" ? classes.full : "",
                    className ?? "",
                )}
                {...props}
                onClick={onClick} 
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
