import * as React from "react";

import Card from "@mui/material/Card";
import Table from "./items";
import { options } from "../../../constant/AllServiceOption";
import CarouselToggleBar from "./CarouselTogglebar";
export default function PinnedSubheaderList() {
  interface ToggleOption {
    label: string;
    value: number;
    page: number;
  }

  const [selectedOption, setSelectedOption] = React.useState(options[0].value);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 13;

  const handleOptionChange = (value: number) => {
    setSelectedOption(value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // You can perform additional actions like fetching data for the new page here
  };

  return (
    <>
      <Card sx={{ maxWidth: "80%", maxHeight: "40%" }}>
        <CarouselToggleBar options={options} onChange={handleOptionChange} />
        <Table />
      </Card>
    </>
  );
}
