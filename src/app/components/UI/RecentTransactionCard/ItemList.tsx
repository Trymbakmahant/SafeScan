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

export default ItemList;
