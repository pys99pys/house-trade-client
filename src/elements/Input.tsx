import { FC } from "react";
import classnames from "classnames";
import { border, rounded, inputAndButtonHeightBase } from "../styles/variables";

interface InputProps {
  type?: "text" | "month";
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ type = "text", value, onChange }) => {
  return (
    <input
      type={type}
      className={classnames(
        inputAndButtonHeightBase,
        border,
        rounded,
        "w-full px-4"
      )}
      value={value}
      onChange={(e) => onChange((e.target as HTMLInputElement).value)}
    />
  );
};

export default Input;
