<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "@/components/base/header";
export default {
  name: 'App',
  components: {Header},
}
</script>

<style lang="scss">
  *{
    font-family: Roboto, Arial, Calibri;
    box-sizing: border-box;
    color: white;
  }
  body  {
    width: 100%;
    height: 100vh;
    margin: 0;
    background: #202324;
  }
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page{
    width: 100%;
    height: 100vh;
    padding-top: 75px;
  }
</style>
