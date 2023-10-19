"use client";

import { Grid, Card, Typography, Box } from "@mui/material";
import List from "../../components/UI/RecentTransactionCard/page";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";

const SearchPage = () => {
  const [addres, setaddres] = useState<string>(
    "0x670D3DE9Ea8D545b682ef298105425e0BF51301a"
  );
  const [copy, setCopy] = useState<Boolean>(false);
  //address copy to clipboard
  const handleAdresCopy = () => {
    navigator.clipboard.writeText(addres);
    setCopy(true);
    alert(`"copied" ${addres} `);
  };
  return (
    <>
      <Grid className={styles.main}>
        <Grid my={2} xs={12}>
          <Card sx={{ padding: "20px", gap: "12px" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ padding: "20px" }}>
                {/* <Image width={25} height={25} alt="" src="/orig1.png" /> */}
                <img src="/orig.png" />
              </Box>
              <Typography>
                {" "}
                <Typography sx={{ fontSize: "20px", color: "#707070	" }}>
                  Address
                </Typography>
                {addres}{" "}
                {
                  <IconButton onClick={handleAdresCopy}>
                    <ContentCopyIcon />
                  </IconButton>
                }
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid className={styles.cardWrapper} gap={2}>
          <Grid className={styles.card}>
            <Card sx={{ padding: "20px", gap: "12px", height: "15rem" }}>
              <Typography sx={{ fontSize: "20px" }}> Overview</Typography>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#707070	" }}>
                  ETH BALANCE
                </Typography>
                <Typography my={0.5} sx={{ fontSize: "14px" }}>
                  {" "}
                  0.006316480545808319 ETH
                </Typography>
              </div>
              <div
                style={{
                  marginTop: "18px",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#707070	" }}>
                  ETH VALUE
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  {" "}
                  $9.83 (@ $1,555.68/ETH)
                </Typography>
              </div>
              <div
                style={{
                  marginTop: "18px",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#707070	" }}>
                  TOKEN HOLDINGS
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  {" "}
                  $9.83<span>(1 Tokens)</span>
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid className={styles.card}>
            <Card sx={{ padding: "20px", gap: "12px", height: "15rem" }}>
              <Typography sx={{ fontSize: "20px" }}> More info</Typography>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#707070	" }}>
                  PRIVATE NAME TAG
                </Typography>
                <Typography my={0.5} sx={{ fontSize: "14px" }}>
                  {" "}
                  + Add
                </Typography>
              </div>
              <div
                style={{
                  marginTop: "18px",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#707070	" }}>
                  LAST TXN SENT
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  {" "}
                  0xeeeaf4f353c02 . . . .
                  <span style={{ color: "#707070	" }}>from 26 sec ago</span>
                </Typography>
              </div>
              <div
                style={{
                  marginTop: "18px",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#707070	" }}>
                  FIRST TXN SENT{" "}
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  {" "}
                  0xfc1d37f034c18. . . . .
                  <span style={{ color: "#707070	" }}>from 318 days ago</span>
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid className={styles.card}>
            <Card sx={{ padding: "20px", height: "15rem", gap: "12px" }}>
              <Typography sx={{ fontSize: "20px" }}>Multichain</Typography>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "#707070	" }}>
                  MULTICHAIN ADDRESSES
                </Typography>
                <Typography my={0.5} sx={{ fontSize: "14px" }}>
                  {" "}
                  17 addresses found via bLOCKSCANE
                </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Grid my={7} xs={12}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <List />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchPage;
