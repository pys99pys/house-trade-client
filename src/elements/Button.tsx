import { FC } from "react";
import classnames from "classnames";
import { Color } from "../models/buttonModels";
import { rounded, inputAndButtonHeightBase } from "../styles/variables";
import { getBackgroundColor } from "../utils/tailwindUtils";

interface ButtonProps {
  color?: Color;
}

const Button: FC<ButtonProps> = ({ color = "button", children }) => {
  return (
    <button
      className={classnames(
        inputAndButtonHeightBase,
        rounded,
        getBackgroundColor(color),
        "px-5"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
