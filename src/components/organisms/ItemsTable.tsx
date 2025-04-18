import { Paper, Table } from "@mui/material";
import React from "react";

import { useEdit } from "../../context/EditItemContext";
import DialogComponent from "../molecules/DialogComponent";
import TableHeader from "../molecules/TableHeader";
import TableMainContent from "../molecules/TableMainContent";

const ItemsTable: React.FC = () => {
  const { isEditOpen, closeEdit } = useEdit();
  console.log("isEditOpen: ", isEditOpen);
  return (
    <div>
      <Paper sx={{ width: "100%", overflowX: "auto", mt: 2 }}>
        <Table>
          <TableHeader />
          <TableMainContent />
        </Table>
      </Paper>
      <DialogComponent
        open={isEditOpen}
        onClose={closeEdit}
        title="Edit Item"
      />
    </div>
  );
};

export default ItemsTable;
