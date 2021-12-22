import { FC } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import classNames from "classnames";
import {
  backgroundButton,
  backgroundButtonHover,
  backgroundPrimary,
  backgroundPrimaryHover,
  inputAndButtonHeightBase,
  inputAndButtonHeightSmall,
} from "../styles/variables";

interface CheckboxProps {
  size?: "default" | "small";
  checked: boolean;
  onClick: () => void;
}

const Checkbox: FC<CheckboxProps> = ({
  size = "default",
  checked,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={classNames("rounded-full transition-colors", {
        [backgroundButton]: !checked,
        [backgroundButtonHover]: !checked,
        [backgroundPrimary]: checked,
        [backgroundPrimaryHover]: checked,
        [inputAndButtonHeightBase]: size === "default",
        "px-5": size === "default",
        [inputAndButtonHeightSmall]: size === "small",
        "px-3": size === "small",
        "text-sm": size === "small",
      })}
      onClick={onClick}
    >
      <span
        className={classNames("mr-2", {
          "text-white": checked,
          "text-gray-400": !checked,
        })}
      >
        <Icon icon={faCheck} />
      </span>
      <span
        className={classNames({
          "text-white": checked,
          "text-gray-500": !checked,
        })}
      >
        {children}
      </span>
    </button>
  );
};

export default Checkbox;
