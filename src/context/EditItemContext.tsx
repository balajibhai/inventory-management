import React, { createContext, ReactNode, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FormData } from "../types";
import { findItemByName } from "../utils/findItemByName";

// Define the shape of the context
interface EditItemContextProps {
  isEditOpen: boolean;
  openEdit: (id: string) => void;
  closeEdit: () => void;
  currentData: any;
}

// Create the context
const EditItemContext = createContext<EditItemContextProps | undefined>(
  undefined
);

// Provider component
export const EditItemProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentData, setCurrentData] = useState<FormData>({
    itemType: "",
    name: "",
    description: "",
    nonTaxable: false,
    statusInactive: false,
    location: "",
    unit: "",
    sku: "",
    price: "",
    weight: "",
    tracking: false,
    category: "",
    subcategory: "",
  });
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const openEdit = (id: string) => {
    const data = findItemByName(categories, id); // type: EditDialogue | undefined
    if (data) {
      // only update when found
      setCurrentData(data);
      setIsEditOpen(true);
    } else {
      // optional: show a toast or log an error
      console.warn(`Item ${id} not found`);
    }
  };

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  return (
    <EditItemContext.Provider
      value={{ isEditOpen, openEdit, closeEdit, currentData }}
    >
      {children}
    </EditItemContext.Provider>
  );
};

// Custom hook for consuming the context
export const useEdit = (): EditItemContextProps => {
  const context = useContext(EditItemContext);
  if (!context) {
    throw new Error("useEdit must be used within an EditProvider");
  }
  return context;
};
