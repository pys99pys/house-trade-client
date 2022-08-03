import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import css from "./SearchFilter.module.css";
import Icon from "./Icon";

interface SearchFilterProps {}

const SearchFilter: FC<SearchFilterProps> = () => {
  return (
    <ul className={css.searchFilter}>
      <li>
        <button>
          서울시 강동구
          <span>
            <Icon icon={<FaTimes />} />
          </span>
        </button>
      </li>
      <li>
        <button>
          서울시 강남구
          <span>
            <Icon icon={<FaTimes />} />
          </span>
        </button>
      </li>
    </ul>
  );
};

export default SearchFilter;
