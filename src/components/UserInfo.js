import React from "react";
import { useSession } from "../providers/SessionProvider";

const UserInfo = () => {
  const { user } = useSession();

  return (
    <div className="_section">
      <h2 className="subtitle">User Info</h2>
      {user ? `welcome ${user.firstName}` : "No user authenticated yet"}
    </div>
  );
};

export default UserInfo;
