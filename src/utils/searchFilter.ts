import { LandCodeChildren, LandCodeItem } from "../models/LandCode";
import landCodes from "../jsons/landCodes.json";

export const getStorageData = (): string[] => {
  try {
    const savedData = window.localStorage.getItem("SAVED_CODES");

    return savedData ? JSON.parse(savedData) : [];
  } catch {
    return [];
  }
};

export const setStorageData = (code: string): string[] => {
  const savedData = getStorageData();
  const afterData = [...new Set([...savedData, code])];

  window.localStorage.setItem("SAVED_CODES", JSON.stringify(afterData));
  return afterData;
};

export const removeStorageData = (code: string): string[] => {
  const savedData = getStorageData();
  const afterData = savedData.filter((item) => item !== code);

  window.localStorage.setItem("SAVED_CODES", JSON.stringify(afterData));
  return afterData;
};

export const getCityItem = (code: string): LandCodeItem | undefined =>
  landCodes.find((item) => item.children.some((child) => child.code === code));

export const getCodeItem = (code: string): LandCodeChildren | undefined => {
  const cityItem = getCityItem(code);

  return cityItem?.children.find((item) => item.code === code);
};
