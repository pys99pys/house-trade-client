import { FC } from "react";
import css from "./Select.module.css";

interface SelectProps {
  value: string;
  options: {
    label: string;
    value: string;
  }[];
}

const Select: FC<SelectProps> = ({ value, options }) => {
  return (
    <select className={css.select}>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
