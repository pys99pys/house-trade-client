import { FC } from "react";
import Select from "../elements/Select";
import landCodes from "../jsons/landCodes.json";

interface CitySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const cityNames = landCodes.map((item) => item.name);

const CitySelect: FC<CitySelectProps> = ({ value, onChange }) => {
  return (
    <Select
      defaultLabel={value ? undefined : "시/도 선택"}
      options={cityNames.map((item) => ({
        label: item,
        value: item,
      }))}
      value={value}
      onChange={onChange}
    />
  );
};

export default CitySelect;
