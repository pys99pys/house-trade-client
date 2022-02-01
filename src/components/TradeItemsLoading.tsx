import { FC } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Icon from "../elements/Icon";

const TradeItemsLoading: FC = () => {
  return (
    <>
      <span className="inline-block text-3xl text-gray-400 animate-spin">
        <Icon icon={faSpinner} />
      </span>
      <p className="mt-5">데이터를 불러오고 있습니다.</p>
    </>
  );
};

export default TradeItemsLoading;
