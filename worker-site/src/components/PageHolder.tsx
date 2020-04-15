import * as React from "react";
import { Switch, Route } from "react-router";
import Home from "../pages/workerhome";

export interface PageHolderProps {}

const PageHolder: React.FC<PageHolderProps> = () => {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default PageHolder;
