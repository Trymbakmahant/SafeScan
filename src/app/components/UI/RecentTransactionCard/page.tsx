import * as React from "react";
import Card from "@mui/material/Card";
import ItemList from "./ItemList";
import { options } from "../../../constant/AllServiceOption";
import {
  Tab,
  Tabs,
  Paper,
  IconButton,
  Container,
  Typography,
  TablePagination,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
interface ToggleOption {
  label: string;
  value: number;
  SafeTxService: string;
  ProviderLink: string;
  ScanLink: string;
  // ApiKey: string;
}
export default function PinnedSubheaderList() {
  const [page, setPage] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const rowsPerPage = 8;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage); // Ensure this updates the page state correctly.
  };
  let itemsToShow = items;

  if (items.length > 8) {
    itemsToShow = items.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  }

  const [selectedOption, setSelectedOption] = React.useState(options[0].value);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 13;
  const handleOptionChange = (value: number) => {
    setSelectedOption(value);
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setActiveIndex(newIndex);
    handleOptionChange(options[newIndex].value);
  };

  const handlePrevClick = () => {
    const newIndex = Math.max(0, activeIndex - 8);
    setActiveIndex(newIndex);
    handleOptionChange(options[newIndex].value);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(options.length - 1, activeIndex + 8);
    setActiveIndex(newIndex);
    handleOptionChange(options[newIndex].value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Card sx={{ maxWidth: "80%", maxHeight: "40%" }}>
        <Paper style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handlePrevClick}>
            <ArrowBackIcon />
          </IconButton>

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

          <IconButton onClick={handleNextClick}>
            <ArrowForwardIcon />
          </IconButton>
        </Paper>
        <Container>
          <ItemList items={itemsToShow} />
          <TablePagination
            component="div"
            count={items.length} // Ensure this represents the total number of items.
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[rowsPerPage]}
          />
        </Container>
      </Card>
    </>
  );
}
