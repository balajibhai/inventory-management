import React, { createContext, useContext, useState } from "react";

interface SelectionContextType {
  selected: { [key: string]: boolean };
  toggleSelect: (key: string, childrenKeys?: string[]) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);

interface SelectionProviderProps {
  children: React.ReactNode;
}

export const SelectionProvider: React.FC<SelectionProviderProps> = ({
  children,
}) => {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const toggleSelect = (key: string, childrenKeys: string[] = []) => {
    setSelected((prev) => {
      const newValue = !prev[key]; // Toggle parent's selection
      const newState = { ...prev, [key]: newValue };
      // Propagate change to all child keys
      childrenKeys.forEach((childKey) => {
        newState[childKey] = newValue;
      });
      return newState;
    });
  };

  return (
    <SelectionContext.Provider value={{ selected, toggleSelect }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};
