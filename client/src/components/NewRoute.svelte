<script>
  export let hidden;
  export let cancelNewRoute;

  let name = "";
  let rating = "";
  let attempts = "";
  let potential_points = "";
  let points_earned = "";

  function clear() {
    name = "";
    rating = "";
    attempts = "";
    potential_points = "";
    points_earned = "";
  }
</script>

<style>
  /* your styles go here */
</style>

<tr {hidden}>
  <td>
    <input
      type="text"
      placeholder="Name"
      class="form-control"
      bind:value={name} />
  </td>
  <td>
    <select class="custom-select custom-select-sm" bind:value={rating}>
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
    <button class="btn btn-light">Save</button>
    <button class="btn btn-light" on:click={cancelNewRoute} on:click={clear}>
      Cancel
    </button>
  </td>
</tr>
