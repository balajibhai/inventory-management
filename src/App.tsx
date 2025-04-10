// src/App.tsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import Layout from "./components/organisms/Layout";
import { ExpansionProvider } from "./context/ExpansionContext";
import InventoryPage from "./pages/InventoryPage";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ExpansionProvider>
        <Layout>
          <InventoryPage />
        </Layout>
      </ExpansionProvider>
    </ThemeProvider>
  );
};

export default App;
