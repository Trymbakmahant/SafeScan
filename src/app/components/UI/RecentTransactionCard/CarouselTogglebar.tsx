interface ToggleOption {
  label: string;
  value: number;
}
import { useNetwork, useSwitchNetwork } from "wagmi";
import React, { useState } from "react";
import { Tab, Tabs, Paper, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CarouselToggleBarProps {
  options: ToggleOption[];
  onChange: (value: number) => void;
}

const CarouselToggleBar: React.FC<CarouselToggleBarProps> = ({
  options,
  onChange,
}) => {
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setActiveIndex(newIndex);
    onChange(options[newIndex].value);
  };

  const handlePrevClick = () => {
    const newIndex = Math.max(0, activeIndex - 8);
    setActiveIndex(newIndex);
    onChange(options[newIndex].value);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(options.length - 1, activeIndex + 8);
    setActiveIndex(newIndex);
    onChange(options[newIndex].value);
  };

  return (
    <Paper style={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={handlePrevClick}>
        <ArrowBackIcon />
      </IconButton>
      {switchNetwork && (
        <Tabs
          value={activeIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
        >
          {options.map((option, index) => (
            <Tab key={index} label={option.label} />
          ))}
        </Tabs>
      )}
      <IconButton onClick={handleNextClick}>
        <ArrowForwardIcon />
      </IconButton>
    </Paper>
  );
};

export default CarouselToggleBar;
