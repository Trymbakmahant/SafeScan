import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton } from "@mui/material";
import styles from "./DataCard.module.scss";
export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};
const Datacard = (props: DataCardProps) => {
  const { title, value, description } = props;
  return (
    <>
      <Grid container>
        <Paper
          className={styles.dataCard}
          sx={{ padding: "1rem 2.5rem ", height: "100%" }}
        >
          <div
            className={styles.header}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography fontSize={"h6"} color={"lightslategrey"}>
              {title}
            </Typography>

            <Tooltip
              title={<Typography fontSize={16}>{description}</Typography>}
            >
              <IconButton>
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Typography
            fontSize={"h4"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {value}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};
export default Datacard;
