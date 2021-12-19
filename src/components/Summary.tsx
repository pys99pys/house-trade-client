import { FC } from "react";

interface SummaryProps {
  count: number;
}

const Summary: FC<SummaryProps> = ({ count }) => {
  return (
    <span>
      총 <strong>{count}</strong>건
    </span>
  );
};

export default Summary;
