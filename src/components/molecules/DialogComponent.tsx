import { Container, Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import DetailsForm from "../organisms/DetailsForm";
import HeaderBar from "./HeaderBar";

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
  title: string;
}

const DialogComponent: React.FC<DialogComponentProps> = (
  props: DialogComponentProps
) => {
  const { open, onClose, title } = props;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <HeaderBar
        title={title}
        icon="Close"
        onClick={onClose}
        pageType="createitem"
      />

      {/* Content of the new "page" */}
      <Container sx={{ mt: 2 }}>{<DetailsForm />}</Container>
    </Dialog>
  );
};

export default DialogComponent;
