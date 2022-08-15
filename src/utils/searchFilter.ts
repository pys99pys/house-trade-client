import { LandCodeChildren, LandCodeItem } from "../models/landCode";
import landCodes from "../jsons/landCodes.json";

export const getCityItemWithCode = (code: string): LandCodeItem | undefined =>
  landCodes.find((item) => item.children.some((child) => child.code === code));

export const getCodeItemWithCode = (
  code: string
): LandCodeChildren | undefined => {
  const cityItem = getCityItemWithCode(code);

  return cityItem?.children.find((item) => item.code === code);
};
