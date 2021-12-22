import { FC } from "react";
import { averageAmountFormat } from "../utils/formatUtils";

interface SummaryProps {
  count: number;
  amountAverage: number | undefined;
}

const Summary: FC<SummaryProps> = ({ count, amountAverage }) => {
  return (
    <span className="inline-flex items-center">
      총 <strong>{count}</strong>건
      {amountAverage !== undefined && (
        <span className="ml-1 text-sm text-gray-500">
          ({averageAmountFormat(amountAverage)})
        </span>
      )}
    </span>
  );
};

export default Summary;
