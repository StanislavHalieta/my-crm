import { FC } from "react";
import { StyledNotFoundPage } from "./styles";

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  return (
    <StyledNotFoundPage>
      <h1>Not found page 404</h1>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
