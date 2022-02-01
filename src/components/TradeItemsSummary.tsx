import { FC } from "react";
import { averageAmountFormat } from "../utils/formatUtils";

interface TradeItemsSummaryProps {
  tradeItemsCount: number;
  tradeAmountAverage: number;
}

const TradeItemsSummary: FC<TradeItemsSummaryProps> = ({
  tradeItemsCount,
  tradeAmountAverage,
}) => {
  return (
    <div className="flex items-center">
      <span>
        총 <strong>{tradeItemsCount}</strong>건
      </span>
      {tradeAmountAverage > 0 && (
        <span className="ml-1 text-sm text-gray-500">
          ({averageAmountFormat(tradeAmountAverage)})
        </span>
      )}
    </div>
  );
};

export default TradeItemsSummary;
