import React, { createContext, useContext, useState } from "react";

export const SessionContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {}
});

const SessionProvider = ({ children, authStrategy }) => {
  const [user, setUser] = useState(null);

  // console.log("SessionProvider", { authStrategy });
  const signIn = async (data) => {
    // console.log("SessionProvider.signIn", { authStrategy });
    const info = await authStrategy.signIn(data);
    console.log("Response", info);
    setUser(info);
  };

  const signOut = () => {
    authStrategy.signOut();
  };

  return (
    <SessionContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;

// custom hook
export const useSession = () => {
  const session = useContext(SessionContext);
  return session;
};
