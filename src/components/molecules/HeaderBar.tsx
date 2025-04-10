// src/components/molecules/HeaderBar.tsx
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

interface HeaderBarProps {
  title: string;
  onHamburgerClick?: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, onHamburgerClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {/* Hamburger Icon */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={onHamburgerClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>

        {/* If you need a profile/icon on the right, place it here */}
        <IconButton color="inherit" sx={{ ml: "auto" }}>
          Profile Icon
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
