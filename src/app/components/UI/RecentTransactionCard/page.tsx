import * as React from "react";
import Card from "@mui/material/Card";
import ItemList from "./ItemList";
import axios from "axios";
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
import { Connected } from "../../wagmiCode/Connected";
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
  const [flag, setFlag] = React.useState(false);
  const [itemsToShow, setItemsToShow] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [apiurl, setApiUrl] = React.useState(options[0].ScanLink);
  const [apiKey, SetApiKey] = React.useState(options[0].ApiKey);
  const rowsPerPage = 3;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage); // Ensure this updates the page state correctly.
  };

  const [selectedOption, setSelectedOption] = React.useState(options[0].value);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleOptionChange = (value: number) => {
    setSelectedOption(value);
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setActiveIndex(newIndex);
    setItems([]);
    setItemsToShow([]);
    handleOptionChange(options[newIndex].value);
    setApiUrl(options[newIndex].ScanLink);
    SetApiKey(options[newIndex].ApiKey);
    setPage(0);
  };

  const handlePrevClick = () => {
    const newIndex = Math.max(0, activeIndex - 10);
    setActiveIndex(newIndex);
    handleOptionChange(options[newIndex].value);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(options.length - 1, activeIndex + 10);
    setActiveIndex(newIndex);
    handleOptionChange(options[newIndex].value);
  };

  const handlePageChange = (event: any, newPage: number) => {
    setCurrentPage(newPage);
    setPage(newPage);
    setItemsToShow(items.slice(page * rowsPerPage, (page + 1) * rowsPerPage));
  };

  async function DataApi() {
    const address = "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2";
    const action = "txlist"; // For normal transactions
    const module = "account";
    const startBlock = "0"; // Start from block 0
    const endBlock = "latest"; // Up to the latest block
    axios
      .get(apiurl, {
        params: {
          module,
          action,
          address,
          startblock: startBlock,
          endblock: endBlock,
          sort: "desc", // To get the most recent transactions first
          apikey: apiKey,
        },
      })
      .then((response) => {
        const transactions = response.data.result;
        setItems(transactions);
        setItemsToShow(
          transactions.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
        );

        console.log("Transactions:", transactions);
        setFlag(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  React.useEffect(() => {
    DataApi();
    setApiUrl(options[activeIndex].ScanLink);
    SetApiKey(options[activeIndex].ScanLink);
    console.log(1);
  }, [activeIndex]);

  return (
    <>
      <Connected>
        {flag && (
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
                onPageChange={handlePageChange}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[rowsPerPage]}
              />
            </Container>
          </Card>
        )}
      </Connected>
    </>
  );
}
