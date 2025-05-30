import { FC, ReactElement } from "react";
import { Content } from "./styles";

interface MainContentProps {
  children: ReactElement;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
  return <Content>{children}</Content>;
};

export default MainContent;
