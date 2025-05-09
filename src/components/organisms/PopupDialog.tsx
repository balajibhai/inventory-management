import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import React, { FC, useState } from "react";
import Text from "../atoms/Text";
import StockSelection from "../molecules/StockSelection";
import VariantSelection from "../molecules/VariantSelection";

interface PopupDialogProps {
  open: boolean;
  onClose: () => void;
}

const PopupDialog: FC<PopupDialogProps> = (props: PopupDialogProps) => {
  const { open, onClose } = props;
  // State to keep track of selected tab: 0 for "Stock Management", 1 for "Variants"
  const [selectedTab, setSelectedTab] = useState<number>(0);

  // Handle tab switching
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        {/* Close icon on the left */}
        <IconButton edge="start" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        {/* Center title */}
        <Text content="Edit variation" variant="h6" />

        {/* Save button on the right */}
        <Button variant="contained">Save</Button>
      </Box>

      <Box px={8}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between",
            },
          }}
        >
          <Tab label="STOCK MANAGEMENT" />
          <Tab label="VARIANTS" />
        </Tabs>
      </Box>

      <DialogContent>
        {selectedTab === 0 && <StockSelection />}
        {selectedTab === 1 && <VariantSelection />}
      </DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
