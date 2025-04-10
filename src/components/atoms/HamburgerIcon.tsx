// src/components/atoms/HamburgerIcon.tsx
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import React from "react";

interface HamburgerIconProps {
  onClick: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ onClick }) => (
  <IconButton edge="start" color="inherit" onClick={onClick}>
    <MenuIcon />
  </IconButton>
);

export default HamburgerIcon;
