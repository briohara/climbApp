<script>
  export let addRoute;  

  export let addRouteDisabled;

  function handleAddRoute(){
    addRoute();
    addRouteDisabled = true;
  }
</script>

<style>
  /* your styles go here */
</style>

<div class="col-2">
  <button class="btn btn-secondary" on:click={handleAddRoute} disabled={addRouteDisabled}>Add Route</button>
</div>
