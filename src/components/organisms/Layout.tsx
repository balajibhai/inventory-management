// src/components/organisms/Layout.tsx
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import FilterBar from "../molecules/FilterBar";
import HeaderBar from "../molecules/HeaderBar";

interface LayoutProps {
  children?: React.ReactNode;
}

// The fixed width of your sidebar
const drawerWidth = 150;

// Define a type for the menu item (if needed, e.g., for additional properties)
interface MenuItem {
  label: string;
  // you can add more fields later if required, such as a 'path', 'icon', etc.
}

const menuItems: MenuItem[] = [
  { label: "Item Library" },
  { label: "Categories" },
  { label: "Image Library" },
  { label: "Units" },
  { label: "Modifiers" },
  { label: "Discounts" },
  { label: "Custom Attributes" },
  { label: "Settings" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <HeaderBar title="Inventory" />

      {/* Sidebar Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin-left 0.3s ease-out",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Push content below the header */}
        <Toolbar />
        {/* Filter Bar goes right below the header */}
        <FilterBar />
        {/* Actual page content below the filter bar */}
        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
