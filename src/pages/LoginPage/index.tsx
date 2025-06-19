import { FC } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { Button, Container, Typography } from "@mui/material";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Увійти
      </Button>
    </Container>
  );
};

export default LoginPage;
