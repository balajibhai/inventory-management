import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the context
interface EditItemContextProps {
  isEditOpen: boolean;
  selectedId: string | number | null;
  openEdit: (id: string | number) => void;
  closeEdit: () => void;
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
  const [selectedId, setSelectedId] = useState<string | number | null>(null);

  const openEdit = (id: string | number) => {
    console.log("Edit clicked for id:", id);
    setSelectedId(id);
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
    setSelectedId(null);
  };

  return (
    <EditItemContext.Provider
      value={{ isEditOpen, selectedId, openEdit, closeEdit }}
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
