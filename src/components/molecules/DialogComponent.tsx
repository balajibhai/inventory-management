import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Container,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { ReactNode } from "react";

// Transition component for the full-screen dialog
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface DialogComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  open,
  onClose,
  title = "Page Title",
  children,
}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          {/* Close button */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          {/* Title */}
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content of the new "page" */}
      <Container sx={{ mt: 2 }}>
        {children || (
          <Typography variant="body1">
            This is the content of the full-screen page. You can add any
            information or components here.
          </Typography>
        )}
      </Container>
    </Dialog>
  );
};

export default DialogComponent;
