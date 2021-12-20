import { FC } from "react";

interface AppLayoutProps {
  searchForm: JSX.Element;
  favoriteFilterItems: JSX.Element;
  itemsTable: JSX.Element;
}

const AppLayout: FC<AppLayoutProps> = ({
  searchForm,
  favoriteFilterItems,
  itemsTable,
}) => {
  return (
    <>
      <header className="h-32 flex justify-center items-center">
        <span className="text-xl font-bold">아파트 실거래가 조회</span>
      </header>

      <main className="m-auto pb-24" style={{ width: "1024px" }}>
        {searchForm}
        <div className="mt-3">{favoriteFilterItems}</div>
        <div className="mt-6">{itemsTable}</div>
      </main>
    </>
  );
};

export default AppLayout;
