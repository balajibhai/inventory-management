// src/App.tsx
import React from "react";
import Layout from "./components/organisms/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      {/* Put your page content here */}
      <h2>Main Content</h2>
      <p>Welcome to the Inventory App!</p>
    </Layout>
  );
};

export default App;
