"use client";
import { use, useState } from "react";
import Sidebar from "../Components/Sidebar/page";
import { Box, Grid, Paper } from "@mui/material";
import styles from "./page.module.scss";

import Dataribbon from "./Dataribbon/DataRibbon";
const Dashboard = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Box>
        <Dataribbon />
      </Box>
    </>
  );
};
export default Dashboard;
