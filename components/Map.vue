<template>
    <div id="map"></div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import 'mapbox-gl/dist/mapbox-gl.css';
  export default {
    data(){
      return{
        access_token: 'pk.eyJ1IjoibWFya2Rhd3NvbjEiLCJhIjoiY2wzNzFvOTQwMXRoMjNpcDlld2FhZTNxcSJ9.gCW5I0cLw2Xq_-EKawtcmA',
        map: {}
      }
    },
    mounted(){
      this.createMap()
      // yourMarkersArray.map((marker) => {
      // const LngLat = [marker.location.lng, marker.location.lat]
      // const popup = marker.description
      // new mapboxgl.Marker()
      //     .setLngLat(LngLat)
      //     .setPopup(popup)
      //     .addTo(map) // Initialized above
      // })
    },
    methods:{
      createMap(){
        mapboxgl.accessToken = this.access_token
        this.map= new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 10,
          center: [-5.5376, 50.1188]
        }),
        this.map.addControl(new mapboxgl.NavigationControl())
      }
    }

  }
</script>

<style>
#map{
  width:100%;
  height:100vh;
}
</style>