<template>
  <nav>
    <div class="logo">
      <router-link to="/" >AAGE</router-link>
      <img class="logo-heeart"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/twitter/282/red-heart_2764-fe0f.png"
      />
    </div>

    <div class="nav-routes">
      <router-link :to="{name: 'Gallery'}">Gallery</router-link>
      <router-link :to="{name: 'Playlist'}">Playlist</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
  nav{
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid white;
    background: #202324;
    padding: 20px;

    a{
      font-size: 25px;
      text-decoration: none;
    }

    .logo{
      font-size: 32px;
      font-weight: bold;


      a{
        font-size: 32px;
        text-decoration: none;
        padding: 8px;
      }
      .logo-heeart{
        width: 34px;
        margin-bottom: -5px;
      }
    }

    .nav-routes{
      a{
        padding: 0 20px;
      }
    }
  }
</style>