import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import TablePagination from "@mui/material/TablePagination";
export default function PinnedSubheaderList() {
  const [alignment, setAlignment] = React.useState("web");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    console.log(newAlignment);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    console.log(newPage);
  };
  function createData(sender: string, reciver: number, amount: number) {
    return { sender, reciver, amount };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Eclair", 262, 16.0),
    createData("Cupcake", 305, 3.7),
    createData("Gingerbread", 356, 16.0),
  ];

  return (
    <>
      <Card sx={{ maxWidth: "80%", maxHeight: "40%" }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Arbitrum">Arbitrum</ToggleButton>
          <ToggleButton value="Aurora">Aurora</ToggleButton>
          <ToggleButton value="Avalanche">Avalanche</ToggleButton>
          <ToggleButton value="Base">Base</ToggleButton>
          <ToggleButton value="BaseGoerli">Base Goerli</ToggleButton>
          <ToggleButton value="BNBSmartChain">BNB Smart Chain</ToggleButton>
          <ToggleButton value="EthereumMainnet">Ethereum Mainnet</ToggleButton>
          <ToggleButton value="GnosisChain">Gnosis Chain</ToggleButton>
          <ToggleButton value="Goerli">Goerli</ToggleButton>
          <ToggleButton value="Optimism">Optimism</ToggleButton>
          <ToggleButton value="Polygon">Polygon</ToggleButton>
          <ToggleButton value="PolygonzkEVM">Polygon zkEVM</ToggleButton>
          <ToggleButton value="zkSyncEraMainnet">
            zkSync Era Mainnet
          </ToggleButton>
        </ToggleButtonGroup>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.sender}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.sender}
                  </TableCell>
                  <TableCell align="right">{row.reciver}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={10}
        />
      </Card>
    </>
  );
}
