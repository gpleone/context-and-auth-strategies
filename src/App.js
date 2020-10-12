import React from "react";
import "./styles.css";

import SessionProvider from "./providers/SessionProvider";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";

import { authStrategy, otherStrategy } from "./auth";

export default function App() {
  authStrategy.setStrategy(otherStrategy);

  return (
    <SessionProvider authStrategy={authStrategy}>
      <div className="container">
        <header className="_section">
          <h1 className="title">Context & Auth Strategies</h1>
        </header>
        <Login />
        <UserInfo />
      </div>
    </SessionProvider>
  );
}
