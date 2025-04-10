// src/components/atoms/ProfileIcon.tsx
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const ProfileIcon: React.FC = () => (
  <IconButton edge="end" color="inherit">
    <Avatar alt="Profile" />
  </IconButton>
);

export default ProfileIcon;
