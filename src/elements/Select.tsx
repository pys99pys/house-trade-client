import { FC } from "react";
import classnames from "classnames";
import { border, rounded, inputAndButtonHeightBase } from "../styles/variables";

interface SelectProps {
  defaultLabel?: string;
  options?: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  defaultLabel,
  options,
  value,
  onChange,
}) => {
  return (
    <select
      className={classnames(
        inputAndButtonHeightBase,
        border,
        rounded,
        "w-full px-2"
      )}
      value={value}
      onChange={(e) => onChange((e.target as HTMLSelectElement).value)}
    >
      {defaultLabel && <option value="">{defaultLabel}</option>}
      {options?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
