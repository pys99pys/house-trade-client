import { FC, ReactNode } from "react";
import cx from "classnames";
import css from "./Button.module.css";

interface ButtonPresenterProps {
  type?: "submit" | "button";
  size?: "default" | "large" | "small";
  color?: "default" | "primary" | "yellow";
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

const ButtonPresenter: FC<ButtonPresenterProps> = ({
  type = "button",
  size = "default",
  color = "default",
  disabled = false,
  icon,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(css.button, {
        [css.small]: size === "small",
        [css.disabled]: disabled,
        [css.primary]: color === "primary",
        [css.yellow]: color === "yellow",
      })}
      onClick={onClick}
    >
      {icon && <span className={css.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default ButtonPresenter;
