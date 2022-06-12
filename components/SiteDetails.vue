<template>
    <div class=" p-4 mx-16 space-y-4">
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Site</h1>
            
            <div v-if="isLoadFinished">
              {{name}}
            </div>
        </span>
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Items</h1>
            <div v-if="isLoadFinished">
              <li v-for="item in items">
                {{ item.item }}
              </li>
            </div> 
        </span>
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Description</h1>
            <div v-if="isLoadFinished">
              {{message}}
            </div>
        </span>
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Images</h1>
                <div class="container flex flex-wrap mx-auto">
                  <div v-if="isLoadFinished">
                    <img :src="image" alt="">
                  </div>
                    <!-- <div class="w-full p-2 rounded lg:w-1/3">
                    <img src="20220319_141840.jpg"
                        alt="image">
                    </div>
                    <div class="w-full p-2 rounded lg:w-1/3">
                        <img src="20220319_141820.jpg"
                            alt="image">
                    </div>
                    <div class="w-full p-2 rounded lg:w-1/3">
                        <img src="20220319_141824.jpg"
                            alt="image">
                    </div>
                    <div class="w-full p-2 rounded lg:w-1/3">
                        <img src="20220319_141826.jpg"
                            alt="image">
                    </div>
                    <div class="w-full p-2 rounded lg:w-1/3">
                        <img src="20220319_141832.jpg"
                            alt="image">
                    </div>
                    <div class="w-full p-2 rounded lg:w-1/3">
                        <img src="20220319_141840.jpg"
                            alt="image">
                    </div>
                    <div class="w-full p-2 rounded lg:w-1/3">
                        <img src="20220319_141846.jpg"
                            alt="image">
                    </div> -->
                </div>
        </span>
    </div> 
</template>

<script>
export default {
  data: () => ({
    sitePost:null,
    name:null,
    items:null,
    message:null,
    image:null,
    isLoadFinished:true
  }),
  created () {
    this.fetchSite()
  },
  computed: {
  activeSite() {
      return this.$store.state.activeSite
    }
  },
  watch: {
    activeSite: {
      deep: true,
      handler (newVal, oldVal) {
        this.fetchSite()
        this.isLoadFinished = true
      }
    }
  },
  methods: {
    async fetchSite() {
      this.isLoadFinished = false
      await this.$localProdAPI.post.fetchSite({id:this.activeSite}).then((response) => {
      this.items = response.data.posts[0].items
      this.name = response.data.name
      this.message = response.data.posts[0].message
      this.image = response.data.posts[0].image
      })
    }
  }
}
</script>

<style>

</style>