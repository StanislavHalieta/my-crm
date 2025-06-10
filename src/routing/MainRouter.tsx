import { FC } from "react";
import { Route, Routes } from "react-router";
import { HomePage, LoginPage, NotFoundPage, SalesPage } from "../pages";

interface MainRouterProps {}

const MainRouter: FC<MainRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
