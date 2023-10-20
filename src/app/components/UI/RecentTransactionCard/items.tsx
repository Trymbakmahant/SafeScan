import React from "react";
import { Container, Typography, TablePagination } from "@mui/material";
import ItemList from "./ItemList";

const items = [
  {
    id: 1,
    receiver: "oxwsesfsjkl3i3",
    sender: "Oxwijwefdje34r432590eefd",
    amount: "1",
  },
  { id: 2, receiver: "Charlie", sender: "David", amount: "2" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "3" },
  { id: 1, receiver: "Alice", sender: "Bob", amount: "4" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "5" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "6" },
  { id: 1, receiver: "Alice", sender: "Bob", amount: "7" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "8" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "9" },
  { id: 1, receiver: "Alice", sender: "Bob", amount: "10" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "11" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "12" },
  { id: 1, receiver: "Alice", sender: "Bob", amount: "13" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "14" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "15" },
  { id: 1, receiver: "Alice", sender: "Bob", amount: "16" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "17" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "18" },
  { id: 1, receiver: "Alice", sender: "Bob", amount: "19" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "20" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "21" },
  { id: 2, receiver: "Alice", sender: "Bob", amount: "22" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "23" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "24" },
  { id: 2, receiver: "Alice", sender: "Bob", amount: "25" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "26" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "27" },
  { id: 2, receiver: "Alice", sender: "Bob", amount: "28" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "29" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "30" },
  { id: 2, receiver: "Alice", sender: "Bob", amount: "31" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "32" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "33" },
  { id: 2, receiver: "Alice", sender: "Bob", amount: "34" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "35" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "36" },
  { id: 2, receiver: "Alice", sender: "Bob", amount: "37" },
  { id: 2, receiver: "Charlie", sender: "David", amount: "38" },
  { id: 3, receiver: "Eve", sender: "Frank", amount: "39" },
  { id: 2, receiver: "Alice", sender: "Bob", amount: "40" },
];

const ItemsPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 8;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage); // Ensure this updates the page state correctly.
  };

  // Filter the items to only show the specified number of items per page
  let itemsToShow = items.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <Container>
      <ItemList items={itemsToShow} />
      <TablePagination
        component="div"
        count={items.length} // Ensure this represents the total number of items.
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </Container>
  );
};

export default ItemsPage;
