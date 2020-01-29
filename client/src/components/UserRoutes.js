import React, { useState, useEffect } from "react";

import { getAllRoutes } from "../api/api";
import Route from "./Route";

const UserRoutes = ({ cookie }) => {
  const jwt = cookie.JWT;
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    //grab routes from db with User Id (right now just grab all)
    getAllRoutes(jwt)
      .then(data => {
        setRoutes(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rating</th>
          <th scope="col">Attempts</th>
          <th scope="col">Points Earned</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {routes.length === 0
          ? null
          : routes.map(route => <Route route={route} jwt={jwt} />)}
      </tbody>
    </table>
  );
};

export default UserRoutes;
