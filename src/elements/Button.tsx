import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import classnames from "classnames";
import { Color } from "../models/buttonModels";
import {
  rounded,
  inputAndButtonHeightBase,
  inputAndButtonHeightSmall,
} from "../styles/variables";
import { getBackgroundColor } from "../utils/tailwinds";
import Icon from "./Icon";

interface ButtonProps {
  icon?: IconDefinition;
  size?: "default" | "small";
  color?: Color;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  icon,
  size = "default",
  color = "button",
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={classnames(
        className,
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
      {icon && (
        <span className="mr-1">
          <Icon icon={icon} />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
