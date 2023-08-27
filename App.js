import React from "react";
import Navigation from "./Navigation";
import { TransactionProvider } from "./context/Context";
const App = () => {
  return (
    <TransactionProvider>
      <Navigation />
    </TransactionProvider>
  );
};

export default App;
