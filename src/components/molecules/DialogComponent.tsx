import { Container, Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/categories/categoriesSlice";
import { FormData, NewItemPayload } from "../../types";
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
  const [formData, setFormData] = useState<NewItemPayload>({
    itemType: "",
    name: "",
    description: "",
    nonTaxable: false,
    statusInactive: false,
    location: "",
    unit: "",
    category: "",
    sku: "",
    price: "",
    weight: "",
    tracking: false,
  });
  const dispatch = useDispatch();

  // Helper function to update form data
  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSave = () => {
    dispatch(addItem(formData));
  };

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
        onClose={onClose}
        onSave={onSave}
        pageType="createitem"
      />

      {/* Content of the new "page" */}
      <Container sx={{ mt: 2 }}>
        {
          <DetailsForm
            onItemPropertyChange={updateFormData}
            formData={formData}
          />
        }
      </Container>
    </Dialog>
  );
};

export default DialogComponent;
