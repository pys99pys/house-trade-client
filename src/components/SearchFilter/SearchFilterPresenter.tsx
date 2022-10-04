import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { SearchFilterItem } from '../../models/SearchFilter';
import Button from '../../elements/Button';
import IconPresenter from '../../elements/Icon/IconPresenter';
import css from './SearchFilter.module.css';

interface SearchFilterPresenterProps {
  items: SearchFilterItem[];
  onSelect: (code: string) => void;
  onRemove: (code: string) => void;
}

const SearchFilterPresenter: FC<SearchFilterPresenterProps> = ({ items, onSelect, onRemove }) => {
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
              <IconPresenter icon={<FaTimes />} />
            </span>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SearchFilterPresenter;
