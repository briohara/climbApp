import React, { useState, useEffect } from "react";

import RoutesTable from "./RoutesTable";
import * as api from "../api/api";

const UserRoutes = () => {
  const RoutesDataTableTitle = `${localStorage.getItem("username")}'s Routes`;
  const RoutesDataColumns = [
    { title: "Name", field: "name", type: "string" },
    {
      title: "Rating",
      field: "rating",
      initialEditValue: "5.6",
      type: "string"
    },
    {
      title: "Attempts",
      field: "attempts",
      initialEditValue: 0,
      type: "numeric"
    },
    {
      title: "Location",
      field: "location",
      initialEditValue: "",
      type: "string"
    }
  ];

  return (
    <div id="user-routes">
      <RoutesTable
        columns={RoutesDataColumns}
        tableTitle={RoutesDataTableTitle}
        getData={api.getAllRoutes}
        createData={api.createRoute}
        updateData={api.updateRoute}
        deleteData={api.deleteRoute}
      />
    </div>
  );
};

export default UserRoutes;
