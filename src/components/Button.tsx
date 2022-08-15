import { FC, ReactNode } from "react";
import cx from "classnames";
import css from "./Button.module.css";

interface ButtonProps {
  type?: "submit" | "button";
  size?: "default" | "large" | "small";
  color?: "default" | "primary" | "yellow";
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  size = "default",
  color = "default",
  children,
}) => {
  return (
    <button
      type={type}
      className={cx(css.button, {
        [css.sizeSmall]: size === "small",
        [css.colorPrimary]: color === "primary",
        [css.colorYellow]: color === "yellow",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
