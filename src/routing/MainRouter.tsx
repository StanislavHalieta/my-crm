import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage, SalesPage } from "../pages";

interface MainRouterProps {}

const MainRouter: FC<MainRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sales" element={<SalesPage />} />
    </Routes>
  );
};

export default MainRouter;
