import { FC } from "react";
import classnames from "classnames";
import { Color } from "../models/buttonModels";
import {
  rounded,
  inputAndButtonHeightBase,
  inputAndButtonHeightSmall,
} from "../styles/variables";
import { getBackgroundColor } from "../utils/tailwindUtils";

interface ButtonProps {
  size?: "default" | "small";
  color?: Color;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  size = "default",
  color = "button",
  onClick,
  children,
}) => {
  return (
    <button
      className={classnames(
        rounded,
        getBackgroundColor(color),
        "cursor-pointer",
        {
          [inputAndButtonHeightBase]: size === "default",
          [inputAndButtonHeightSmall]: size === "small",
          "px-5": size === "default",
          "px-3": size === "small",
          "text-sm": size === "small",
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
