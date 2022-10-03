import { LandCodeChildren, LandCodeItem } from "../models/LandCode";
import landCodes from "../jsons/landCodes.json";

export const getCityItem = (code: string): LandCodeItem | undefined =>
  landCodes.find((item) => item.children.some((child) => child.code === code));

export const getCodeItem = (code: string): LandCodeChildren | undefined => {
  const cityItem = getCityItem(code);

  return cityItem?.children.find((item) => item.code === code);
};
