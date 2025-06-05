import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage, NotFoundPage, SalesPage } from "../pages";

interface MainRouterProps {}

const MainRouter: FC<MainRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
