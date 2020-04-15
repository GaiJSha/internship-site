import React from "react";
import Header from "./components/Header";
import PageHolder from "./components/PageHolder";
import { connect } from "react-redux";
import { AppState } from "./store";
import { updateSession } from "./store/system/actions";
import { SystemState } from "./store/system/types";

interface AppProps {
  updateSession: typeof updateSession;
  system: SystemState;
}

const loggedIn: SystemState = {
  loggedIn: true,
  session: "string",
  userName: "ben",
};

function App(props: AppProps) {
  return (
    <div className="App">
      {!props.system.loggedIn && (
        <button onClick={() => props.updateSession(loggedIn)}>log in</button>
      )}
      <Header />
      <PageHolder />
    </div>
  );
}

const bindStateToProps = (reduxState: AppState) => ({
  system: reduxState.system,
});

export default connect(bindStateToProps, { updateSession })(App);
