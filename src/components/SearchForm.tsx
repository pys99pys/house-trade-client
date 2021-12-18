import { FC } from "react";
import { SearchForm as SearchFormType } from "../models/searchFormModels";
import Button from "../elements/Button";
import Input from "../elements/Input";
import CitySelect from "./CitySelect";
import StateSelect from "./StateSelect";

interface SearchFormProps {
  form: SearchFormType;
  onChangeDate: (date: string) => void;
  onChangeCityName: (cityName: string) => void;
  onChangeStateCode: (stateCode: string) => void;
}

const SearchForm: FC<SearchFormProps> = ({
  form,
  onChangeDate,
  onChangeCityName,
  onChangeStateCode,
}) => {
  return (
    <div className="flex">
      <ul className="flex">
        <li className="mr-2">
          <Input type="month" value={form.date} onChange={onChangeDate} />
        </li>
        <li className="mr-2">
          <CitySelect value={form.cityName} onChange={onChangeCityName} />
        </li>
        <li className="mr-2">
          <StateSelect
            cityName={form.cityName}
            value={form.stateCode}
            onChange={onChangeStateCode}
          />
        </li>
        {form.stateCode && (
          <li>
            <Button
              color="yellow"
              onClick={() => {
                alert("구현중");
              }}
            >
              즐겨찾기 추가
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchForm;
