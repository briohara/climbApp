import React, { useState } from "react";
import { useCookies } from "react-cookie";
import UserRoutes from "./UserRoutes";

const Userpage = () => {
  const [cookie, setCookie] = useCookies("JWT");

  return (
    <div className="container">
      <UserRoutes cookie={cookie} />
    </div>
  );
};

export default Userpage;
