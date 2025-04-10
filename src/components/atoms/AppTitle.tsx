// src/components/atoms/AppTitle.tsx
import { Typography } from "@mui/material";
import React from "react";

interface AppTitleProps {
  title: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ title }) => (
  <Typography variant="h6" component="div">
    {title}
  </Typography>
);

export default AppTitle;
