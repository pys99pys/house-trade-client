import { FC, ReactNode } from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  searchForm: ReactNode;
  searchFilter: ReactNode;
  table: ReactNode;
}

const Layout: FC<LayoutProps> = ({ searchForm, searchFilter, table }) => {
  return (
    <>
      <header className={css.header}>수도권 아파트 실거래가 조회</header>
      <main className={css.main}>
        {searchForm}
        <div className={css.searchFilterWrap}>{searchFilter}</div>
        <div className={css.tableWrap}>{table}</div>
      </main>
    </>
  );
};

export default Layout;
