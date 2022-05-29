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
        map: {},
        data: [
          {'Name': 'Gurnards Head',
          'location':{'lat': 50.1824941038516, 'lon': -5.593098873330255},
          'description':'Little stall opposite pub updated on a weekly basis',
          'owned_by': 'Some Lady',
          'items': ['eggs','jam']
          },
          {'Name': 'Gulval School',
          'location':{'lat': 50.132258294437996,'lon': -5.527442420889749},
          'description':'Food grown by Gulval School',
          'owned_by': 'Gulval Primary',
          'items': ['corgettes','runner beans']
          }
        ]
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
        this.data.map((marker) => {
          console.log(marker.location.lon)
          const LngLat = [marker.location.lon, marker.location.lat]
          const popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.description);
          console.log(LngLat)
          new mapboxgl.Marker()
              .setLngLat(LngLat)
              .setPopup(popup)
              .addTo(this.map) // Initialized above
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