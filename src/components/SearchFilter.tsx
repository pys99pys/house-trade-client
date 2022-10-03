import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { SearchFilterItem } from "../models/SearchFilter";
import Button from "./Button";
import Icon from "./Icon";
import css from "./SearchFilter.module.css";

interface SearchFilterProps {
  items: SearchFilterItem[];
  onSelect: (code: string) => void;
  onRemove: (code: string) => void;
}

const SearchFilter: FC<SearchFilterProps> = ({ items, onSelect, onRemove }) => {
  return (
    <ul className={css.searchFilter}>
      {items.map((item) => (
        <li key={item.code}>
          <Button size="small" onClick={() => onSelect(item.code)}>
            {item.label}
            <span
              onClick={(e) => {
                e.stopPropagation();
                onRemove(item.code);
              }}
            >
              <Icon icon={<FaTimes />} />
            </span>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SearchFilter;
