<template>
<div>
    <div id="map"></div>
    {{this.sites}}
    {{typeof this.sites}}
    {{activeSite}}
</div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import 'mapbox-gl/dist/mapbox-gl.css';
  export default {
    props : {
      sites:Array
    },
    data(){
      return{
        access_token: 'pk.eyJ1IjoibWFya2Rhd3NvbjEiLCJhIjoiY2wzNzFvOTQwMXRoMjNpcDlld2FhZTNxcSJ9.gCW5I0cLw2Xq_-EKawtcmA',
        map: {}
      }
    },
    computed: {
      activeSite() {
        return this.$store.state.activeSite
      },
      accessToken: function() {
        return process.env.VUE_APP_UNTANGLE_MAPBOX_ACCESS_TOKEN
      },
      mapStyle: function() {
        return process.env.VUE_APP_UNTANGLE_MAPBOX_STYLE
      }
    },
    mounted(){
      this.createMap()
      this.addControl()
      this.addMarkers()
    },
    methods:{
      createMap(){
        mapboxgl.accessToken = this.access_token
        this.map= new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 10,
          center: [-5.5376, 50.1188]
        })
      },
      addControl(){
        this.map.addControl(new mapboxgl.NavigationControl())
      },
      addMarkers(){
        console.log('------ThisisaMarker----')
        console.log(this.sites)
        console.log('------ThisisaMarker----')
        this.sites.map((marker) => {
          console.log(marker)
          const LngLat = [marker.lon, marker.lat]
          const popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.description);
          const markerHandle = new mapboxgl.Marker({color: "#3fb1ce"})
              .setLngLat(LngLat)
              .setPopup(popup)
              .addTo(this.map) // Initialized above
          markerHandle.getElement().addEventListener('click', () => {
            this.$store.dispatch('setActiveSite',marker.name)
            })
        })
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