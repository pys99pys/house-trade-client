import classnames from "classnames";
import { Color } from "../models/buttonModels";
import {
  backgroundButton,
  backgroundButtonHover,
  backgroundPrimary,
  backgroundPrimaryHover,
  backgroundRed,
  backgroundRedHover,
  backgroundYellow,
  backgroundYellowHover,
} from "../styles/variables";

export const getBackgroundColor = (color: Color): string => {
  let className = "";

  switch (color) {
    case "primary":
      className = classnames(
        backgroundPrimary,
        backgroundPrimaryHover,
        "text-white"
      );
      break;
    case "yellow":
      className = classnames(backgroundYellow, backgroundYellowHover);
      break;
    case "red":
      className = classnames(backgroundRed, backgroundRedHover, "text-white");
      break;
    default:
      className = classnames(backgroundButton, backgroundButtonHover);
  }

  return classnames(className, "transition-colors");
};
