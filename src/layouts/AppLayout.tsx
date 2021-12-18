import { FC } from "react";

interface AppLayoutProps {
  searchForm: JSX.Element;
  itemCount: JSX.Element;
  itemTable: JSX.Element;
}

const AppLayout: FC<AppLayoutProps> = ({
  searchForm,
  itemCount,
  itemTable,
}) => {
  return (
    <>
      <header className="h-32 flex justify-center items-center">
        <span className="text-xl font-bold">아파트 실거래가 조회</span>
      </header>

      <main className="m-auto pb-24" style={{ width: "1024px" }}>
        {searchForm}
        <div className="mt-10">{itemCount}</div>
        <div className="mt-5">{itemTable}</div>
      </main>
    </>
  );
};

export default AppLayout;
