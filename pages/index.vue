<template>
  <div class="w-full h-full">
    <div class="flex mb-4">
      <div class="w-1/2 bg-gray-400">
        <Map/>
      </div>
      <div class="w-1/2 bg-gray-500">
      </div>
    </div>
  </div> 

</template>

<script>
  import Map from '@/components/Map.vue'
  import mapboxgl from 'mapbox-gl'
  
  export default {
    name: 'Home',
    layout: 'home',
    auth: false,
    components: {
      Map
  }
  }
</script>

<style>

</style>