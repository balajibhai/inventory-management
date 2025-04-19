// src/components/OptionsMenu.tsx
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

interface OptionsMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  haveChildren: boolean;
}

const OptionsMenu: React.FC<OptionsMenuProps> = (props: OptionsMenuProps) => {
  const { onEdit, onDelete, haveChildren } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    onEdit();
    handleClose();
  };
  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label="more options"
        aria-controls={open ? "options-menu" : undefined}
        aria-haspopup="true"
        onClick={handleOpen}
        size="small"
      >
        <MoreVertIcon fontSize="inherit" />
      </IconButton>

      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // make it tiny and right‑aligned under the button
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            minWidth: 0,
            paddingY: 0.5,
          },
        }}
      >
        {!haveChildren && <MenuItem onClick={handleEdit}>Edit</MenuItem>}
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default OptionsMenu;
