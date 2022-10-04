import { FC, ReactNode } from 'react';

interface IconPresenterProps {
  icon: ReactNode;
}

const IconPresenter: FC<IconPresenterProps> = ({ icon }) => {
  return <>{icon}</>;
};

export default IconPresenter;
