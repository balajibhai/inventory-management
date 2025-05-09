import { Container, Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, editItem } from "../../redux/categories/categoriesSlice";
import { FormData } from "../../types";
import DetailsForm from "../organisms/DetailsForm";
import HeaderBar from "./HeaderBar";

// ───────────────────────────────────────────────────
// 1) default object for an empty form
// ───────────────────────────────────────────────────
const EMPTY_FORM_DATA: FormData = {
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
  subcategory: "",
};

// ───────────────────────────────────────────────────
// 2) transition helper
// ───────────────────────────────────────────────────
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
  /** pass the item you want to edit; omit / null for a fresh form */
  currentData?: FormData | null;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  open,
  onClose,
  title,
  currentData,
}) => {
  const dispatch = useDispatch();

  // initialise with whatever we have *right now* (may still be empty)
  const [formData, setFormData] = useState<FormData>(
    currentData ?? EMPTY_FORM_DATA
  );

  // ───────────────────────────────────────────────────
  // 3) keep local state in sync whenever currentData changes
  // ───────────────────────────────────────────────────
  useEffect(() => {
    setFormData(currentData ?? EMPTY_FORM_DATA);
  }, [currentData, open]); // also reset when the dialog is reopened

  /* helper to update individual fields */
  const updateFormData = (field: keyof FormData, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const onSave = () => {
    if (title === "Edit Item" && currentData) {
      dispatch(
        editItem({ originalName: currentData.name, updatedItem: formData })
      );
    } else {
      dispatch(addItem(formData));
    }
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

      <Container sx={{ mt: 2 }}>
        <DetailsForm
          onItemPropertyChange={updateFormData}
          formData={formData}
        />
      </Container>
    </Dialog>
  );
};

export default DialogComponent;
