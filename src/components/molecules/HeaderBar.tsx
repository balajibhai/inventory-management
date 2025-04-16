// src/components/molecules/HeaderBar.tsx
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";
import Text from "../atoms/Text";

interface HeaderBarProps {
  title: string;
  onClose?: () => void;
  onSave?: () => void;
  pageType?: string;
  icon: keyof typeof ICON_MAP;
}

const ICON_MAP = {
  Menu: MenuIcon,
  Close: CloseIcon,
};

const HeaderBar: React.FC<HeaderBarProps> = (props: HeaderBarProps) => {
  const { title, onClose, pageType, icon, onSave } = props;
  const Component = ICON_MAP[icon];
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          sx={{ mr: 2 }}
        >
          <Component />
        </IconButton>

        {/* Title */}
        <Text content={title} variant="h6" />

        {/* If you need a profile/icon on the right, place it here */}
        {pageType === "Home" && (
          <IconButton color="inherit" sx={{ ml: "auto" }}>
            Profile Icon
          </IconButton>
        )}
        {pageType === "createitem" && (
          <Button
            variant="contained"
            color="success"
            sx={{ ml: "auto" }}
            onClick={onSave}
          >
            Save
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
