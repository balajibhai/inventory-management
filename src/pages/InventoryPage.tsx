import { Box } from "@mui/material";
import React from "react";
import ItemsTable from "../components/organisms/ItemsTable";
import { EditItemProvider } from "../context/EditItemContext";

const InventoryPage: React.FC = () => {
  return (
    <Box p={2}>
      <EditItemProvider>
        <ItemsTable />
      </EditItemProvider>
    </Box>
  );
};

export default InventoryPage;
