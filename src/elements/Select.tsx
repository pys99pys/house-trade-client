import { FC } from "react";
import classnames from "classnames";
import { border, rounded, inputAndButtonHeightBase } from "../styles/variables";

interface SelectProps {
  defaultLabel?: string;
}

const Select: FC<SelectProps> = ({ defaultLabel }) => {
  return (
    <select
      className={classnames(inputAndButtonHeightBase, border, rounded, "px-2")}
    >
      {defaultLabel && <option value="">{defaultLabel}</option>}
    </select>
  );
};

export default Select;
