import { FC } from "react";
import { Grid } from "@mui/material";
import {
  MainCard,
  MainChart,
  MainPieChart,
  MainSlider,
} from "../../components";
import { StyledHomePage, StyledHomePageGrid } from "./styles";

interface HomePageProps {}
const cards = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

const HomePage: FC<HomePageProps> = () => {
  return (
    <StyledHomePage>
      <StyledHomePageGrid container spacing={2}>
        <Grid size={{ xs: 5, sm: 4, md: 3 }}>
          <MainSlider value={40} max={50} title="charts.awaitingPayments" />
        </Grid>
        <Grid size={{ xs: 5, sm: 4, md: 3 }}>
          <MainSlider value={40} max={50} title="charts.convertedLeads" />
        </Grid>
        <Grid size={{ xs: 5, sm: 4, md: 3 }}>
          <MainSlider value={10} max={12} title="charts.projectsInProgress" />
        </Grid>
        <Grid size={{ xs: 5, sm: 4, md: 3 }}>
          <MainSlider value={2} max={10} title="charts.unfinishedTasks" />
        </Grid>
        {/* ********************************************************************* */}
        <Grid size={{ xs: 5, sm: 4, md: 6 }}>
          <MainChart />
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 6 }}>
          <MainPieChart />
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 12 }}>
          {cards.map((card) => (
            <MainCard card={card} key={card.id} />
          ))}
        </Grid>
      </StyledHomePageGrid>
    </StyledHomePage>
  );
};

export default HomePage;
