import { FC } from "react";

interface TradeItemsLayoutProps {
  summary: JSX.Element;
  tradeItemsFilter: JSX.Element;
  tradeItems: JSX.Element;
}

const TradeItemsLayout: FC<TradeItemsLayoutProps> = ({
  summary,
  tradeItemsFilter,
  tradeItems,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        {summary}
        {tradeItemsFilter}
      </div>
      <div className="mt-3">{tradeItems}</div>
    </>
  );
};

export default TradeItemsLayout;
