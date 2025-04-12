import { Paper, Table } from "@mui/material";
import React from "react";

import TableHeader from "../molecules/TableHeader";
import TableMainContent from "../molecules/TableMainContent";

const ItemsTable: React.FC = () => {
  return (
    <Paper sx={{ width: "100%", overflowX: "auto", mt: 2 }}>
      <Table>
        <TableHeader />
        <TableMainContent />
      </Table>
    </Paper>
  );
};

export default ItemsTable;
