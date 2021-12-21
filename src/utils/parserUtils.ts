import { TradeItem } from "../models/tradeItemModels";
import { calendarFormat, sizeFormat } from "./formatUtils";

export const parseToTradeItem = (row: any): TradeItem => {
  return {
    apartName: row["아파트"].trim(),
    tradeAmount: Number(row["거래금액"].replace(/[^0-9]/gi, "")) * 10000,
    tradeDate: `${row["년"]}-${calendarFormat(row["월"])}-${calendarFormat(
      row["일"]
    )}`,
    sizeArea: row["전용면적"],
    sizeFlat: sizeFormat(row["전용면적"]),
    buildedYear: row["건축년도"],
    address: row["법정동"].trim(),
    floor: row["층"],
  };
};
