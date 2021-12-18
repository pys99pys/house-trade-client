import { FC, useMemo } from "react";
import Select from "../elements/Select";
import landCodes from "../jsons/landCodes.json";

interface StateSelectProps {
  cityName: string;
  value: string;
  onChange: (value: string) => void;
}

const StateSelect: FC<StateSelectProps> = ({ cityName, value, onChange }) => {
  const getStateItems = useMemo(() => {
    return landCodes.find((item) => item.name === cityName)?.children || [];
  }, [cityName]);

  return (
    <Select
      defaultLabel={value ? undefined : "시/군/구 선택"}
      options={getStateItems.map((item) => ({
        label: item.name,
        value: item.code,
      }))}
      value={value}
      onChange={onChange}
    />
  );
};

export default StateSelect;
