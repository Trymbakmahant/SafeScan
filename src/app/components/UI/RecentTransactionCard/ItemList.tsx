import React, { useState } from "react";
import Link from "next/link";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
} from "@mui/material";

interface Item {
  id: number;
  receiver: string;
  sender: string;
  amount: string;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Receiver</TableCell>
              <TableCell>Sender</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.receiver}</TableCell>
                <TableCell>{item.sender}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>
                  <Link href={`/pages/${item.id}`} passHref>
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

export default ItemList;
