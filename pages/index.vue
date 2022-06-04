<template>
  <div class="w-full h-full">
    <div class="flex mb-4">
      <div class="w-1/2">
        <Map 
          :sites="sites"  v-if="sites"
        />
      </div>
      <div class="w-1/2">
        <SiteDetails
          :posts="posts"  v-if="posts"
        />
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
      posts:null
    }),
    created () {
      this.fetchSites(),
      this.fetchPosts()
    },
    methods: {
      fetchSites() {
        this.$localProdAPI.post.fetchSites().then((response) => {
        this.sites = response.data
      })
      },
      fetchPosts() {
        this.$localProdAPI.post.fetchPosts().then((response) => {
        this.posts = response.data
      })
      }
    }
  }
</script>

<style>

</style>