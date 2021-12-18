import { FC } from "react";
import classnames from "classnames";
import { border, rounded, inputAndButtonHeightBase } from "../styles/variables";

interface InputProps {
  type?: "text" | "month";
}

const Input: FC<InputProps> = ({ type = "text" }) => {
  return (
    <input
      type={type}
      className={classnames(inputAndButtonHeightBase, border, rounded, "px-4")}
    />
  );
};

export default Input;
