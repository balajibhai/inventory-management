import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

interface MenuItem {
  id: number;
  label: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "Item Library" },
  { id: 2, label: "Categories" },
  { id: 3, label: "Image Library" },
  { id: 4, label: "Units" },
  { id: 5, label: "Modifiers" },
  { id: 6, label: "Discounts" },
  { id: 7, label: "Custom Attributes" },
  { id: 8, label: "Settings" },
];

// The fixed width of your sidebar
const drawerWidth = 150;

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
