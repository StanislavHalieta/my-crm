import { FC } from "react";
import { Sidebar } from "./styles";
import MainMenu from "../MainMenu";

interface MainSidebarProps {}

const MainSidebar: FC<MainSidebarProps> = () => {
  return (
    <Sidebar sx={{ overflow: "visible" }}>
      <MainMenu />
    </Sidebar>
  );
};

export default MainSidebar;
