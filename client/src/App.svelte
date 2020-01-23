<script>
  import * as api from "./api/api.js";
  import { onMount } from "svelte";

  import RouteList from "./components/RouteList.svelte";
  import AddRoute from "./components/AddRoute.svelte";
  import TotalPoints from "./components/TotalPoints.svelte";

  let routes = [];
  let totalPoints = 0;
  let addRouteDisabled = false;

  onMount(() => {
    fetchRoutes();
  });

  function fetchRoutes() {
    api.getAllRoutes().then(data => {
      routes = data;
      reducePoints();
    });
  }

  function reducePoints() {
    if (routes.length === 0) {
      totalPoints = 0;
    } else {
      totalPoints = routes.map(r => r.points_earned).reduce((a, b) => a + b);
    }
  }

  function addRoute() {
    routes = [
      ...routes,
      {
        _id: 1,
        edit: true,
        name: "",
        rating: "",
        attempts: "",
        points_earned: 0,
        total_points: 0
      }
    ];
  }

  function cancelNewRoute(e) {
    if (e.detail._id === 1) {
      routes = routes.filter(r => {
        return r._id !== e.detail._id;
      });
    } else {
      const index = routes.map(r => r._id).indexOf(e.detail._id);
      routes[index].edit = false;
    }
    addRouteDisabled = false;
  }

  function enableNewRouteButton(e) {
    addRouteDisabled = false;
  }

  let functions = {
    fetchRoutes: fetchRoutes
  };
</script>

<div class="container">
  <RouteList bind:routes {functions} on:cancelNewRoute={cancelNewRoute} />
  <div class="row justify-content-between">
    <AddRoute {addRoute} bind:addRouteDisabled />
    <TotalPoints {totalPoints} />
  </div>
</div>
