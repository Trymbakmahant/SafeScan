import React from "react";
import { useRouter } from "next/router";
import { Grid, Paper, Typography } from "@mui/material";

interface ItemDetailProps {
  receiver: string;
  sender: string;
  amount: string;
}

const ItemDetail: React.FC<ItemDetailProps> = ({
  receiver,
  sender,
  amount,
}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper style={{ padding: "20px" }}>
          <Typography variant="h4">Item Details</Typography>
          <Typography>Receiver: {receiver}</Typography>
          <Typography>Sender: {sender}</Typography>
          <Typography>Amount: {amount}</Typography>
          <Typography>Item ID: {id}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
