import { FC } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Select from "../elements/Select";

interface SearchFormProps {}

const SearchForm: FC<SearchFormProps> = () => {
  return (
    <div className="flex">
      <ul className="flex">
        <li className="mr-2">
          <Input type="month" />
        </li>
        <li className="mr-2">
          <Select defaultLabel="시/도 선택" />
        </li>
        <li className="mr-2">
          <Select defaultLabel="시/군/구 선택" />
        </li>
        <li className="mr-2">
          <Button color="primary">검색</Button>
        </li>
        <li>
          <Button color="yellow">즐겨찾기</Button>
        </li>
      </ul>
    </div>
  );
};

export default SearchForm;
