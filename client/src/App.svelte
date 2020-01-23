<script>
  import * as api from "./api/api.js";
  import { onMount } from "svelte";

  import RouteList from "./components/RouteList.svelte";
  import AddRoute from "./components/AddRoute.svelte";
  import TotalPoints from "./components/TotalPoints.svelte";

  let routes = [];
  let totalPoints = reducePoints();
  let addRouteDisabled = false;

  onMount(() => {
    fetchRoutes();
  });

  function fetchRoutes() {
    api.getAllRoutes().then(data => {
      routes = data;
    })
  }

  function reducePoints() {
    if (routes.length === 0) {
      return 0;
    } else {
      return routes.reduce(
        (total, current) => total.points_earned + current.points_earned
      );
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
    routes = routes.filter(r => {
      return r._id !== e.detail._id;
    });
    addRouteDisabled = false;
  } 

  function enableNewRouteButton(e) {
    addRouteDisabled = false;
  }

  function hello() {
    console.log("hello");
  }

  let functions = {
    fetchRoutes: fetchRoutes,
    hello: hello
  }
</script>

<div class="container">
  <RouteList  
    bind:routes
    {functions}
    on:cancelNewRoute={cancelNewRoute}/>
  <div class="row justify-content-between">
    <AddRoute {addRoute} bind:addRouteDisabled />
    <TotalPoints {totalPoints} />
    <!-- WIP -->
  </div>
</div>

<button on:click={console.log(routes)}>TEST</button>