<template>
  <div class="w-full h-full">
    <div class="flex mb-4">
      <div class="w-1/2">
        <Map 
          :sites="sites"  v-if="sites"
        />
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
    },
    data: () => ({
      sites:null,
      // sitePost:null
    }),
    computed: {
      activeSite() {
        return this.$store.state.activeSite
      }
    },
    created () {
      this.fetchSites()
      // this.fetchSite()
    },
    methods: {
      fetchSites() {
        this.$localProdAPI.post.fetchSites().then((response) => {
        this.sites = response.data
      })
      },
      // fetchSite() {
      //   this.$localProdAPI.post.fetchSite({id:this.activeSite}).then((response) => {
      //   this.sitePost = response.data
      // })
      // }
    }
  }
</script>

<style>

</style>