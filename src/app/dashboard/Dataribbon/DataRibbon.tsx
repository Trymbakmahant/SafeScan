import Datacard from "../Datacard/Datcard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./Datareboon.module.scss";
export default function Dataribbon() {
  return (
    <>
      <Grid className={styles.Dataribbon} container gap={2}>
        <Grid>
          {" "}
          <Datacard
            title={"Total Premium sales"}
            value={"234"}
            description={"this is our hight sales"}
          />
        </Grid>
        <Grid>
          {" "}
          <Datacard
            title={"Total economy sales"}
            value={"234"}
            description={"this is our  lowest sales"}
          />
        </Grid>
        <Grid>
          {" "}
          <Datacard
            title={"Total front-row sales"}
            value={"234"}
            description={"this is our highest sales"}
          />
        </Grid>
        <Grid>
          {" "}
          <Datacard
            title={"Total front-row sales"}
            value={"234"}
            description={"this is our highest sales"}
          />
        </Grid>
      </Grid>
    </>
  );
}
