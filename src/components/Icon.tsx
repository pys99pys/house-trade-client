import { FC, ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
}

const Icon: FC<IconProps> = ({ icon }) => {
  return <>{icon}</>;
};

export default Icon;
