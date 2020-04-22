import React, { useEffect } from "react";
import Header from "./components/Header";
import PageHolder from "./components/PageHolder";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fetchStock } from "./store/stock/actions";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

interface AppProps {
  fetchStock: () => Promise<ThunkAction<Promise<void>, {}, {}, AnyAction>>;
}

const App: React.FC<AppProps> = ({ fetchStock }) => {
  useEffect(() => {
    fetchStock();
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

const bindDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  fetchStock: async () => await dispatch(fetchStock()),
});

export default connect(() => {}, bindDispatchToProps)(App);
