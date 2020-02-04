import React from "react";

const Route = props => {
  const { name, rating, attempts, points_earned, _id } = props.route;
  const jwt = props.jwt;
  const handleDelete = props.handleDelete;

  return (
    <tr>
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
        <button
          type="button"
          className="btn btn-danger"
          onClick={e => handleDelete(jwt, _id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Route;
