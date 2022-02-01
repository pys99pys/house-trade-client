import { FC } from "react";

interface AppLayoutProps {
  searchForm: JSX.Element;
  favoriteFilterItems: JSX.Element;
  tradeItems: JSX.Element;
}

const AppLayout: FC<AppLayoutProps> = ({
  searchForm,
  favoriteFilterItems,
  tradeItems,
}) => {
  return (
    <>
      <header className="h-32 flex justify-center items-center">
        <span className="text-xl font-bold">아파트 실거래가 조회</span>
      </header>
      <main
        className="px-5 container m-auto pb-24 md:px-0"
        style={{ width: "1024px", maxWidth: "100%" }}
      >
        {searchForm}
        <div className="mt-3">{favoriteFilterItems}</div>
        <div className="mt-6">{tradeItems}</div>
      </main>
    </>
  );
};

export default AppLayout;
