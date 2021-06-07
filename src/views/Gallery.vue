<template>
  <div class="page">
    <div class="gallery">

      <div class="gallery-div" v-for="(image, i) in images" :key="i">
        <img :alt="i" class="image" :src="image"  @click="index = i">
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
      </div>

    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: "Gallery",
  components: {
    VueGallerySlideshow
  },
  data() {
    return {
        images: [],
        index: null
      };
  },
  created() {
    const illustrations = require.context(
        '@/assets/images',
        true
    )
    this.images = illustrations.keys();
    this.images = this.images.map(image => require('../assets/images/' + image.substring(2)));
    console.log(require('../assets/images/' + this.images[0].substring(2)));
  }
}
</script>

<style lang="scss">
  .gallery{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .gallery-div{
    width: 23%;

    margin: 1%;
    border: 2px solid white;
    max-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CDCDCD;
  }
  .image{
    object-fit: cover;
    max-width: 100%;
    max-height: 100%
  }

</style>