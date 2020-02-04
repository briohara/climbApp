import React, { useState, useEffect } from "react";

import { getAllRoutes, deleteRoute, createRoute } from "../api/api";
import Route from "./Route";
import NewRoute from "./NewRoute";

const UserRoutes = ({ cookie }) => {
  const jwt = cookie.JWT;
  const [routes, setRoutes] = useState([]);
  const [deletedRoute, setDeletedRoute] = useState(false);
  const [showAddRoute, setShowAddRoute] = useState(false);

  useEffect(() => {
    setDeletedRoute(false);
    //grab routes from db with User Id (right now just grab all)
    getAllRoutes(jwt)
      .then(data => {
        setRoutes(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [deletedRoute, showAddRoute]);

  function handleDelete(jwt, _id) {
    deleteRoute(jwt, _id)
      .then(
        //find out how to rerender
        setDeletedRoute(true),
        console.log("successful")
      )
      .catch(err => {
        console.error(err);
      });
  }

  function handleCreate(jwt, route) {
    createRoute(jwt, route)
      .then(setShowAddRoute(false))
      .catch(err => {
        console.error(err);
      });
  }

  function handleCancel() {
    setShowAddRoute(false);
  }

  return (
    <div id="user-routes">
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
          {routes === undefined
            ? null
            : routes.map(route => (
                <Route
                  key={route.name}
                  route={route}
                  jwt={jwt}
                  handleDelete={handleDelete}
                />
              ))}
          {showAddRoute ? (
            <NewRoute
              jwt={jwt}
              handleCancel={handleCancel}
              handleCreate={handleCreate}
            />
          ) : null}
        </tbody>
      </table>

      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          setShowAddRoute(true);
        }}
      >
        Add Route
      </button>
    </div>
  );
};

export default UserRoutes;
