<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import Route from "./Route.svelte";
  import NewRoute from "./NewRoute.svelte";

  export let routes;
  export let functions;
  // export let cancelNewRoute;

  function cancelNewRoute(e) {
    dispatch("cancelNewRoute", {
      _id: e.detail._id
    });
  }
</script>

<style>
  /* your styles go here */
</style>

<table class="table table-hover table-sm">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Rating</th>
      <th scope="col">Attempts</th>
      <th scope="col">Points Earned</th>
      <th />
    </tr>
  </thead>
  <tbody>
    {#each routes as route}
      <Route
        bind:route
        {functions}
        edit={route.edit ? route.edit : false}
        on:cancelNewRoute={cancelNewRoute} />
    {/each}
    <!-- <NewRoute hidden={hideNewRoute} {cancelNewRoute} /> -->
  </tbody>
</table>
