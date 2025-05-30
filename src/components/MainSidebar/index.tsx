import { FC } from "react";
import { Sidebar } from "./styles";
import MainMenu from "../MainMenu";

interface MainSidebarProps {}

const MainSidebar: FC<MainSidebarProps> = () => {
  return (
    <Sidebar>
      <MainMenu />
    </Sidebar>
  );
};

export default MainSidebar;
