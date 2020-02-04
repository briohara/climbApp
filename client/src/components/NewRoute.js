import React, { useState, useEffect } from "react";

const NewRoute = props => {
  const jwt = props.jwt;
  const handleCreate = props.handleCreate;
  const handleCancel = props.handleCancel;

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [attempts, setAttempts] = useState("");
  const [points_earned, setPointsEarned] = useState("");

  return (
    <tr key="New Route">
      <td>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          id="rating"
          type="text"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
      </td>
      <td>
        <input
          id="attempts"
          type="number"
          value={attempts}
          onChange={e => setAttempts(e.target.value)}
        />
      </td>
      <td>
        <input
          id="points_earned"
          type="number"
          value={points_earned}
          onChange={e => setPointsEarned(e.target.value)}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            handleCreate(jwt, { name, rating, attempts, points_earned });
          }}
        >
          Save
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default NewRoute;
