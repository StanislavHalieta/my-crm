import { FC } from "react";
import { StyledCard, StyledSlider } from "./styles";

interface MainSliderProps {
  value: number;
  max: number;
  title: string
}

const MainSlider: FC<MainSliderProps> = ({ value, max, title }) => {
  return (
    <StyledCard>
      <span>{title}</span>
      <span>{`${value}/${max}`}</span>
      <StyledSlider
        defaultValue={value}
        valueLabelDisplay="off"
        min={0}
        max={max}
      />
    </StyledCard>
  );
};

export default MainSlider;
