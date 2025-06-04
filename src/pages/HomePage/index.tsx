import { Grid, Paper } from "@mui/material";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 5, sm: 4, md: 4 }}>
          <Paper>size=8</Paper>
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Paper>size=4</Paper>
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Paper>size=4</Paper>
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Paper>size=8</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
