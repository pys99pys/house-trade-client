import { FC, ReactNode } from "react";
import css from "./AppLayout.module.css";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <header className={css.header}>수도권 아파트 실거래가 조회</header>
      <main className={css.main}>{children}</main>
    </>
  );
};

export default AppLayout;
