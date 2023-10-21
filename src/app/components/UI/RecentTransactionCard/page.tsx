"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import Link from "next/link";
import { options } from "../../../constant/AllServiceOption";
import {
  Tab,
  Tabs,
  Paper,
  IconButton,
  Container,
  Typography,
  TablePagination,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
} from "@mui/material";
import { Connected } from "../../wagmiCode/Connected";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Item {
  blockHash: "0xa54e2e48552c7428c6f7b5b748a78d452a3bd23a227e4c992c634d315816d8e5";
  blockNumber: "18399277";
  confirmations: "20";
  contractAddress: "";
  cumulativeGasUsed: "6659184";
  from: "0x9d0870e65416c0727cf733704069d9fea5a66be4";
  functionName: "createProxyWithNonce(address _mastercopy, bytes initializer, uint256 saltNonce)";
  gas: "261619";
  gasPrice: "10999913628";
  gasUsed: "258640";
  hash: "0xe2cbcb881abb5825f24f97f84439b1cb7acd191b705a0ebdcee3c31309d2747a";
  input: "0x1688f0b9000000000000000000000000d9db270c1b5e3bd161e8c8503c55ceabee70955200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000018b52a241b00000000000000000000000000000000000000000000000000000000000000164b63e800d0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000f48f2b2d2a534e402487b3ee7c18c33aec0fe5e400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009d0870e65416c0727cf733704069d9fea5a66be4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  isError: "0";
  methodId: "0x1688f0b9";
  nonce: "9";
  timeStamp: "1697898467";
  to: "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2";
  transactionIndex: "67";
  txreceipt_status: "1";
  value: "0";
}
export default function PinnedSubheaderList() {
  const [page, setPage] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [itemsToShow, setItemsToShow] = React.useState<Item[]>([]);
  const [items, setItems] = React.useState<Item[]>([]);
  const [apiurl, setApiUrl] = React.useState(options[0].ScanLink);
  const [apiKey, SetApiKey] = React.useState(options[0].ApiKey);
  const rowsPerPage = 10;

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setActiveIndex(newIndex);
    setItems([]);
    setItemsToShow([]);

    setApiUrl(options[newIndex].ScanLink);
    SetApiKey(options[newIndex].ApiKey);
    setPage(0);
  };

  const handlePrevClick = () => {
    const newIndex = Math.max(0, activeIndex - 10);
    setActiveIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(options.length - 1, activeIndex + 10);
    setActiveIndex(newIndex);
  };

  const handlePageChange = (event: any, newPage: number) => {
    setPage(newPage);
    console.log("newPage " + newPage);
    console.log(itemsToShow);
    setItemsToShow(
      items.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
      // 0,3,  2,6 ,
    );
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
            <CustomTableBody items={itemsToShow} page={page} />
            <Container>
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

interface CustomBody {
  items: Item[];
  page: number;
}

const CustomTableBody: React.FC<CustomBody> = ({ items, page }) => {
  React.useEffect(() => {
    console.log(1);
    console.log(items);
  }, [page]);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction Hash</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Block</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Txn Fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.blockNumber}>
                <TableCell>{item.hash}</TableCell>
                <TableCell>{item.functionName}</TableCell>
                <TableCell>{item.blockNumber}</TableCell>
                <TableCell>{item.timeStamp}</TableCell>
                <TableCell>{item.from}</TableCell>
                <TableCell>{item.to}</TableCell>
                <TableCell>{item.value}</TableCell>
                <TableCell>{item.gas}</TableCell>
                <TableCell>
                  <Link href={`/pages/${item.hash}`} passHref>
                    <Button variant="contained" color="primary" component="a">
                      View Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
