"use client";
import { Divider, Typography } from "@mui/material";
import { Grid, Paper, Box, Card, Table } from "@mui/material";
import * as React from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import styles from "./page.module.scss";
const SinglePage = () => {
  function createData(name: string, calories: string) {
    return { name, calories };
  }

  const rows = [
    createData(
      "transection Hash",
      " 0xa9f26007f3880c6d5da031f9817ae920db3cdb9c55f34034efd8b3e64eaa0736"
    ),
    createData("Status:", " 0"),
    createData("Block:", " 48794158"),
    createData("Timestamp:", " 23 secs ago (Oct-16-2023 05:54:35 PM +UTC)"),
  ];
  const rows2 = [
    createData("From:", " 0xb652158f67b9fb39c29412d6f8e1c563ff6724f2"),
    createData(
      "Interacted With (To):",
      " 0x1d0360bac7299c86ec8e99d0c1c9a95fefaf2a11"
    ),

    createData("Transaction Fee:", "0.048828716313062814 MATIC ($0.03)"),
    createData("Value:", "0.048828716313062814 MATIC ($0.03)"),
    createData("Gas Price:", "0.000000134568864838 MATIC (134.568864838 Gwei)"),
    createData("Gas Limit & Usage by Txn:", "368,130 | 362,853 (98.57%)"),
    createData(
      "Gas Fees:",
      "Base: 104.568864838 Gwei |Max: 163.491848271 Gwei |Max Priority: 30 Gwei"
    ),

    createData(
      "urnt & Txn Savings Fees:",
      "🔥 Burnt: 0.037943126313062814 MATIC)💸 Txn Savings: 0.010494791307614349 MATIC"
    ),
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
        <Divider sx={{ bgcolor: "white" }} />
        <Grid container className={styles.maindatacard}>
          <Grid xs={12}>
            <Card className={styles.datacard}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              <Divider />
              <Box sx={{ height: "150px" }}></Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    {rows2.map((row) => (
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

export default SinglePage;
