import React, { createContext, useContext, useState } from "react";

interface ExpansionContextType {
  expanded: { [key: string]: boolean };
  toggleExpand: (key: string) => void;
}

const ExpansionContext = createContext<ExpansionContextType | undefined>(
  undefined
);

// Define explicit props including "children"
interface ExpansionProviderProps {
  children: React.ReactNode;
}

export const ExpansionProvider: React.FC<ExpansionProviderProps> = ({
  children,
}) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ExpansionContext.Provider value={{ expanded, toggleExpand }}>
      {children}
    </ExpansionContext.Provider>
  );
};

export const useExpansion = () => {
  const context = useContext(ExpansionContext);
  if (!context) {
    throw new Error("useExpansion must be used within an ExpansionProvider");
  }
  return context;
};
