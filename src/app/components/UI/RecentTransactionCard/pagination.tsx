import React, { useState } from "react";
import { Pagination, Box } from "@mui/material";

interface PaginationProps {
  count: number; // Total number of pages
  page: number; // Current active page
  onChange: (page: number) => void; // Callback function when a page is changed
}

const CustomPagination: React.FC<PaginationProps> = ({
  count,
  page,
  onChange,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onChange(value);
    console.log(value);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={2}>
      <Pagination
        count={count}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </Box>
  );
};

export default CustomPagination;
