import { FC } from "react";
import classnames from "classnames";
import { Color } from "../models/buttonModels";
import { rounded, inputAndButtonHeightBase } from "../styles/variables";
import { getBackgroundColor } from "../utils/tailwindUtils";

interface ButtonProps {
  color?: Color;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ color = "button", onClick, children }) => {
  return (
    <button
      className={classnames(
        inputAndButtonHeightBase,
        rounded,
        getBackgroundColor(color),
        "px-5"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
