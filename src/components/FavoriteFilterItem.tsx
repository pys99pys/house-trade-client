import { FC } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FavoriteFilterItem as FavoriteFilterItemType } from "../models/filterModels";
import Button from "../elements/Button";
import classNames from "classnames";
import Icon from "../elements/Icon";

interface FavoriteFilterItemProps {
  item: FavoriteFilterItemType;
  onClick: () => void;
  onClickRemoveButton: () => void;
}

const FavoriteFilterItem: FC<FavoriteFilterItemProps> = ({
  item,
  onClick,
  onClickRemoveButton,
}) => {
  return (
    <Button size="small" onClick={onClick}>
      <span className="inline-flex items-center">
        {item.cityName} {item.stateName}{" "}
        <span
          className={classNames(
            "ml-2 text-base text-gray-400 transition-colors hover:text-red-500"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onClickRemoveButton();
          }}
        >
          <Icon icon={faTimes} />
        </span>
      </span>
    </Button>
  );
};

export default FavoriteFilterItem;
