// src/components/organisms/Layout.tsx
import { Box, Toolbar } from "@mui/material";
import React from "react";
import FilterBar from "../molecules/FilterBar";
import HeaderBar from "../molecules/HeaderBar";
import Sidebar from "../molecules/Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <HeaderBar title="Inventory" pageType="Home" icon="Menu" />
      <Sidebar />

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
