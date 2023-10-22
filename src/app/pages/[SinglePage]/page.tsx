"use client";
import { Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { Grid, Paper, Box, Card, Table } from "@mui/material";
import * as React from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fetchTransaction } from "@wagmi/core";
import { type Transaction } from "viem";

import styles from "./page.module.scss";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useRouter } from "next/router";
const SinglePageDetail = ({ params }: { params: { SinglePage: string } }) => {
  interface TxData {
    accessList: [];
    blockHash: "0x183d2f73c320a0f5a00af512e16f325aa2b2bf30fa73c9fe90b1b9ae4c69e6df";
    blockNumber: 9899515n;
    chainId: 5;
    from: "0x645d85678c2d4c56c17f3579a278c2be2d73119c";
    gas: 40993n;
    gasPrice: 1500000016n;
    hash: "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac";
    input: "0x";
    maxFeePerGas: 1500000022n;
    maxPriorityFeePerGas: 1500000000n;
    nonce: 10;
    r: "0x65c002b47dec55620777c8f0d99dc360a3a4fdb2fb8c4aae9ef66849887cec36";
    s: "0x8babdb4df6f98ec65e3d323e3eea20b2fa3839c95d64a2da86d7cfdde2557e3";
    to: "0xa43624b7472c37b1e1884645a3d04710afcd8eb5";
    transactionIndex: 7;
    type: "eip1559";
    v: 0n;
    value: 1000000000000000000n;
  }
  const [transactionData, setTransactionData] = React.useState<Transaction>();
  const data = params.SinglePage;
  console.log(data);
  function createData(name: any, calories: any, toolpick: any) {
    return { name, calories, toolpick };
  }
  async function Fetchtransaction() {
    const txhash = data.slice(2);
    const transaction = await fetchTransaction({
      hash: `0x${txhash}`,
    });
    setTransactionData(transaction);
    console.log(transaction);
  }
  React.useEffect(() => {
    Fetchtransaction();
  }, []);

  const rows = [
    createData(
      "transection Hash",
      data,
      "A TxHash or transaction hash is a unique 66-characters identifier that is generated whenever a transaction is executed."
    ),
    createData("Status:", " 0", "The status of the transaction."),
    createData(
      "Block:",
      transactionData?.blockNumber?.toString(),
      "Number of blocks validated since"
    ),

    createData(
      "From:",
      transactionData?.from,
      "The sending party of the transaction."
    ),
    createData(
      "Interacted With (To):",
      transactionData?.to?.toString(),
      "The receiving party of the transaction (could be a contract address)."
    ),

    createData(
      "Transaction Fee:",
      transactionData?.gas.toString(),
      "Amount paid to the miner for processing the transaction."
    ),
    createData(
      "Value:",
      transactionData?.value.toString(),
      "The value being transacted in MATIC and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction."
    ),
    createData(
      "Gas Price:",
      transactionData?.gasPrice?.toString(),
      "Cost per unit of gas specified for the transaction, in MATIC and Gwei. The higher the gas price the higher chance of getting included in a block."
    ),
    createData(
      "maxFeePerGas :",
      transactionData?.maxFeePerGas?.toString(),
      "Cost per unit of gas specified for the transaction, in MATIC and Gwei. The higher the gas price the higher chance of getting included in a block."
    ),

    createData("Gas:", transactionData?.gas?.toString(), ""),

    createData(
      "Transection Index :",
      transactionData?.transactionIndex?.toString(),
      ""
    ),
    createData("Type:", transactionData?.type?.toString(), " "),
  ];
  return (
    <>
      <Box className={styles.main}>
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              color: "white",
              padding: " 0px 0px 60px 0px",
            }}
          >
            Transection's Details
          </Typography>
        </Box>

        <Grid container className={styles.maindatacard}>
          <Grid xs={12}>
            <Card
              className={styles.datacard}
              sx={{
                border: "0 solid ",
                borderRadius: "8px",
              }}
            >
              <TableContainer component={Paper}>
                <Table
                  size="medium"
                  sx={{
                    minWidth: 650,
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        border: 0,
                      }}
                    >
                      <TableCell
                        sx={{
                          fontSize: "30px",
                          "&:last-child td, &:last-child th": { border: 0 },
                          border: 0,
                        }}
                      >
                        Overview
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          border: 0,
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            width: "300px",
                            fontSize: "20px",
                          }}
                        >
                          <Tooltip
                            title={<Typography>{row.toolpick}</Typography>}
                          >
                            <IconButton>
                              <HelpOutlineIcon />
                            </IconButton>
                          </Tooltip>
                          {row.name}
                        </TableCell>
                        <TableCell
                          sx={{
                            width: "600px",
                            fontSize: "16px",
                            color: "	#888888",
                          }}
                        >
                          {row.calories}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SinglePageDetail;
