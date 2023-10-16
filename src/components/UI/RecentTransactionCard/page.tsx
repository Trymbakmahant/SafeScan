import * as React from "react";

import Card from "@mui/material/Card";
import Table from "./items";
import CarouselToggleBar from "./CarouselTogglebar";
export default function PinnedSubheaderList() {
  interface ToggleOption {
    label: string;
    value: string;
  }

  const options: ToggleOption[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
    { label: "Option 6", value: "option6" },
    { label: "Option 7", value: "option7" },
    { label: "Option 8", value: "option8" },
    { label: "Option 9", value: "option9" },
    { label: "Option 10", value: "option10" },
    { label: "Option 11", value: "option11" },
    { label: "Option 12", value: "option12" },
    { label: "Option 13", value: "option13" },
    { label: "Option 14", value: "option14" },
    { label: "Option 15", value: "option15" },
    { label: "Option 16", value: "option16" },
  ];
  const [alignment, setAlignment] = React.useState("web");
  const [page, setPage] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(options[0].value);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // You can perform additional actions like fetching data for the new page here
  };
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    console.log(newAlignment);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    console.log(newPage);
  };

  function createData(sender: string, reciver: number, amount: number) {
    return { sender, reciver, amount };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Eclair", 262, 16.0),
    createData("Cupcake", 305, 3.7),
    createData("Gingerbread", 356, 16.0),
  ];

  return (
    <>
      <Card sx={{ maxWidth: "80%", maxHeight: "40%" }}>
        <CarouselToggleBar options={options} onChange={handleOptionChange} />
        <Table />
      </Card>
    </>
  );
}
