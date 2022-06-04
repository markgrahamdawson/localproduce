<template>
    <div class=" p-4 mx-16 space-y-4">
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Site</h1>
            Cant get when serialized this way
            {{activeSite}}
        </span>
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Items</h1>
            <ul>
                <li>xxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxx</li>
                <li>Cant get when serialized this way</li>
            </ul>  
        </span>
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Description</h1>
              {{message}}
        </span>
        <span class="block border-b-2">
            <h1 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800 font-semibold whitespace-nowrap dark:text-white">Images</h1>
                <div class="container flex flex-wrap mx-auto">
                    <div class="w-full p-2 rounded lg:w-1/3">
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
                    </div>
                </div>
        </span>
        {{posts}}
    </div> 
</template>

<script>
export default {
  props : {
    posts:Array
  },
  data: () => ({
    message:null
  }),
  created () {
    this.fetchPosts()
    this.message = this.posts[0].message
  },
  computed: {
  activeSite() {
        return this.$store.state.activeSite
    }
  },
  methods: {
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