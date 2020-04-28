import * as React from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/workerhome";
import StockManagerPage from "../pages/StockManager/stockManagerPage";
import ClientStockPage from '../pages/ClientStockPage/clientStock'

export interface PageHolderProps {}

const PageHolder: React.FC<PageHolderProps> = () => {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/stock">
          <StockManagerPage />
        </Route>
        <Route path="/order">
          <ClientStockPage />
        </Route>
      </Switch>
    </div>
  );
};

export default PageHolder;
