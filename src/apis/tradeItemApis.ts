import { TradeItem } from "../models/tradeItemModels";
import { parseToTradeItem } from "../utils/parserUtils";

export const getTradeItems = async (
  date: string,
  stateCode: string
): Promise<TradeItem[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_HOST}/trade/${stateCode}/${date}`
  );

  const items = await response.json();

  return items.map((item: any) => parseToTradeItem(item));
};
