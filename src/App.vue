<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

.background {
  width: 100%;
  height: 100%;
  background-image: url('./assets/background.png');
  background-size: cover;
  text-align: center;
}

.card {
  margin-top: 3vh;
  margin-bottom: 10vh;
  background-color: white;
  width: 50vw;
  border-radius: 20px;
}

.villager-card {
  width: 25vw;
  height: 50vh;
}

@media only screen and (max-width: 1500px) {
  .card {
    width: 85vw;
  }

  .villager-card {
    width: 90vw;
    height: 80vh;
  }
}

</style>