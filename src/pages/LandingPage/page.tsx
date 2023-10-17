import React from "react";
import List from "../../components/UI/RecentTransactionCard/page";
import { Box, Grid, Typography } from "@mui/material";
const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        placeItems: "center",
      }}
      mt={4}
      gap={4}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          placeItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "35px",
            color: "white",
          }}
        >
          Welcome to Safe Scan
        </Typography>
        <Typography
          style={{
            fontSize: "15px",
            color: "#6496B7",
          }}
        >
          Welcome to Safe Scan
        </Typography>
      </Grid>
      <List />
    </Box>
  );
};

export default LandingPage;
