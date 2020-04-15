import React from "react";
import Header from "./components/Header";
import PageHolder from "./components/PageHolder";
import { connect } from "react-redux";
import { AppState } from "./store";
import { updateSession } from "./store/system/actions";
import { SystemState } from "./store/system/types";
import { BrowserRouter } from "react-router-dom";

interface AppProps {
  updateSession: typeof updateSession;
  system: SystemState;
}

function App(props: AppProps) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PageHolder />
      </BrowserRouter>
    </div>
  );
}

const bindStateToProps = (reduxState: AppState) => ({
  system: reduxState.system,
});

export default connect(bindStateToProps, { updateSession })(App);
