import React, { useRef } from "react";

import { useSession } from "../providers/SessionProvider";

const Login = () => {
  const login = useRef(null);
  const pwd = useRef(null);
  const { signIn } = useSession();

  return (
    <div className="_section">
      <div className="field">
        <div className="control">
          <input
            ref={login}
            className="input is-primary"
            type="text"
            placeholder="username"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            ref={pwd}
            className="input is-primary"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <div>
        <button
          className="button is-primary"
          onClick={() => {
            signIn({ user: login.current.value, password: pwd.current.value });
          }}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
