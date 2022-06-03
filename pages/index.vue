<template>
  <div class="w-full h-full">
    <div class="flex mb-4">
      <div class="w-1/2">
        <Map/>
      </div>
      <div class="w-1/2">
        <SiteDetails/>
      </div>
    </div>
  </div> 

</template>

<script>
  import Map from '@/components/Map.vue'
  import SiteDetails from '@/components/SiteDetails.vue'
  import mapboxgl from 'mapbox-gl'
  
  export default {
    name: 'Home',
    layout: 'home',
    auth: false,
    components: {
      Map,
      SiteDetails
  }
  }
</script>

<style>

</style>