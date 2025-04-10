import { Box } from "@mui/material";
import React from "react";
import ItemsTable from "../components/organisms/ItemsTable";

const InventoryPage: React.FC = () => {
  return (
    <Box p={2}>
      <ItemsTable />
    </Box>
  );
};

export default InventoryPage;
