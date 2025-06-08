import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { StyledCard, StyledSlider } from "./styles";

interface MainSliderProps {
  value: number;
  max: number;
  title: string;
}

const MainSlider: FC<MainSliderProps> = ({ value, max, title }) => {
  const { t } = useTranslation();

  return (
    <StyledCard>
      <span>{t(title)}</span>
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
