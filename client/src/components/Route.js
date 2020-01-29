import React from "react";
import { deleteRoute } from "../api/api";

const Route = props => {
  const { name, rating, attempts, points_earned, _id } = props.route;
  const jwt = props.jwt;

  function handleDelete() {
    deleteRoute(jwt, _id)
      .then()
      .catch();
  }

  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{rating}</td>
      <td>{attempts}</td>
      <td>{points_earned}</td>
      <td>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Route;
