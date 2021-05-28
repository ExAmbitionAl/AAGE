<template>
  <div class="page">
    <div class="home">
      <h2>
        ANA'S AND ACA'S
      </h2>
      <h1>
        GOALS EXPERIENCE
      </h1>
      <heart></heart>
    </div>
  </div>

</template>

<script>
import Heart from "@/components/heart";

export default {
  name: "Home",
  components: {
    Heart
  }
}
</script>

<style lang="scss">
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    h1{
      font-size: 55px;
      margin: 0;
    }
    h2{
      font-size: 55px;
      margin: 0;
    }
  }
</style>