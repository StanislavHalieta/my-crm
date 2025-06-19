import { FC, ReactElement } from "react";
import { Main } from "./styles";
import MainSidebar from "../MainSidebar";
import MainContent from "../MainContent";

interface MainLayoutProps {
  children: ReactElement;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Main>
      <MainSidebar />
      <MainContent>{children}</MainContent>
    </Main>
  );
};

export default MainLayout;
