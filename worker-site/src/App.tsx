import React, { useEffect } from "react";
import Header from "./components/Header";
import PageHolder from "./components/PageHolder";
import { BrowserRouter } from "react-router-dom";
import { useStockActions } from "./hooks/useStockActions";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { fetch } = useStockActions();
  useEffect(() => {
    fetch();
    return;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PageHolder />
      </BrowserRouter>
    </div>
  );
};

export default App;
