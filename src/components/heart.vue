<template>
  <div class="heart"></div>
</template>

<script>
export default {
  name: "heart"
}
</script>

<style lang="scss">
.heart {
  background-color: red;
  display: inline-block;
  height: 350px;
  margin: 150px 10px 0 10px;
  position: relative;
  top: 0;
  width: 350px;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1) rotate(-45deg);
  animation: pulse 2s infinite;
}

.heart:before,
.heart:after {
  content: "";
  background-color: red;
  border-radius: 50%;
  height: 350px;
  position: absolute;
  width: 350px;
  transform: scale(1);
  animation: pulseCircle 2s infinite;
  animation-delay: -0.0s;
}

.heart:before {
  top: -165px;
  left: 0;
}

.heart:after {
  left: 165px;
  top: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1)rotate(-45deg);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }

  70% {
    transform: scale(1)rotate(-45deg);
    box-shadow: -10px 10px 40px 0px rgba(255,0,0,1);
  }

  100% {
    transform: scale(1)rotate(-45deg);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

@keyframes pulseCircle {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 40px 0 rgba(255,0,0,1);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>