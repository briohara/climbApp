<script>
  import * as api from "../api/api";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let route;
  export let edit;
  export let functions;

  let _id = route._id;
  let name = route.name;
  let rating = route.rating;
  let attempts = route.attempts;
  let potential_points = route.total_points;
  let points_earned = route.points_earned;

  function clear() {
    name = "";
    rating = "";
    attempts = "";
    potential_points = "";
    points_earned = "";
  }

  function cancelNewRoute() {
    dispatch("cancelNewRoute", { _id: route._id });
  }

  function getNewRouteObject() {
    return {
      name: name,
      rating: rating,
      attempts: attempts,
      points_earned: points_earned,
      total_points: potential_points
    };
  }

  function getExistingRouteObject() {
    return {
      _id: _id,
      name: name,
      rating: rating,
      attempts: attempts,
      points_earned: points_earned,
      total_points: potential_points
    };
  }

  function saveRoute(route) {
    let newRoute = getNewRouteObject();
    let existingRoute = getExistingRouteObject();

    if (_id === 1) {
      api.addNewRoute(newRoute).then(() => {
        edit = !edit;
        cancelNewRoute();
        functions.fetchRoutes();
      });
    } else {
      api.updateRoute(existingRoute).then(() => {
        edit = !edit;
        functions.fetchRoutes();
      });
    }
  }

  function deleteRoute() {
    let existingRoute = getExistingRouteObject();
    api.deleteRoute(existingRoute).then(() => {
      functions.fetchRoutes();
    });
  }

  function editRoute() {
    edit = true;
  }
</script>

<style>

</style>

<tr hidden={edit}>
  <td>{name}</td>
  <td>{rating}</td>
  <td>{attempts}</td>
  <td>{potential_points}</td>
  <td>{points_earned}</td>
  <td class="text-right">
    <button class="btn btn-light" on:click={editRoute}>Edit</button>
    <button class="btn btn-light" on:click={deleteRoute}>Delete</button>
  </td>
</tr>
<tr hidden={!edit}>
  <td>
    <input
      type="text"
      placeholder="Name"
      class="form-control"
      bind:value={name} />
  </td>
  <td>
    <select class="custom-select custom-select-sm" bind:value={rating}>
      <option value="none" />
      <option>5.6</option>
      <option>5.7</option>
      <option>5.8</option>
      <option>5.9</option>
      <option>5.10</option>
      <option>5.11</option>
      <option>5.12</option>
      <option>5.13</option>
      <option>5.14</option>
    </select>
  </td>
  <td>
    <input
      type="number"
      placeholder="Attempts"
      class="form-control"
      bind:value={attempts} />
  </td>
  <td>
    <input
      type="number"
      placeholder="Potential Points"
      class="form-control"
      bind:value={potential_points} />
  </td>
  <td>
    <input
      type="number"
      placeholder="Points Earned"
      class="form-control"
      bind:value={points_earned} />
  </td>
  <td class="text-right">
    <button class="btn btn-light" on:click={saveRoute}>Save</button>
    <button class="btn btn-light" on:click={cancelNewRoute}>Cancel</button>
  </td>
</tr>
