import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  actionStyle?: "primary" | "secondary" | "info" | "contrast" | "destructive";
  emphasis?: "bold" | "subtle" | "minimal";
  size?: "small" | "medium" | "large" | "x-large";
  shape?: "square" | "circle";
}

export const Button = ({
  actionStyle = "primary",
  emphasis = "bold",
  size = "medium",
  shape = "square",
  className,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.Button,
        // Minimal css specificity enabling override
        styles[`${actionStyle}-${emphasis}`],
        styles[size],
        styles[shape],
        className
      )}
      {...restProps}
    ></button>
  );
};
