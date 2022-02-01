import { FC } from "react";
import useSearchFormStore from "../hooks/useSearchFormStore";
import Button from "../elements/Button";
import Input from "../elements/Input";
import CitySelect from "./CitySelect";
import StateSelect from "./StateSelect";
import useFavoriteFiltersStore from "../hooks/useFavoriteFiltersStore";

const SearchForm: FC = () => {
  const {
    searchForm,
    onChangeTradeMonth,
    onChangeCityName,
    onChangeStateCode,
  } = useSearchFormStore();

  const { onSaveFavoriteFilter } = useFavoriteFiltersStore();

  return (
    <ul className="flex flex-wrap">
      <li className="w-full mb-2 md:w-auto md:mb-0 md:mr-2">
        <Input
          type="month"
          value={searchForm.tradeMonth}
          onChange={onChangeTradeMonth}
        />
      </li>
      <li className="w-1/2 pr-1 md:w-auto md:mr-2 md:pr-0">
        <CitySelect value={searchForm.cityName} onChange={onChangeCityName} />
      </li>
      <li className="w-1/2 pl-1 md:w-auto md:mr-2 md:pl-0">
        <StateSelect
          cityName={searchForm.cityName}
          value={searchForm.stateCode}
          onChange={onChangeStateCode}
        />
      </li>
      {searchForm.stateCode && (
        <li className="w-full mt-2 md:w-auto md:mt-0">
          <Button
            className="w-full md:w-auto"
            color="yellow"
            onClick={() => onSaveFavoriteFilter(searchForm.stateCode)}
          >
            필터 저장
          </Button>
        </li>
      )}
    </ul>
  );
};

export default SearchForm;
