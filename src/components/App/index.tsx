import { FC } from "react";
import MainLayout from "../MainLayout";
import MainHeader from "../MainHeader";
import MainRouter from "../../routing/MainRouter";
import { StyledApp } from "./styles";

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
      <StyledApp>
        <MainHeader />
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </StyledApp>
  );
};

export default App;
