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
  width: 100vw;
  background-image: url('./assets/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
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

@media only screen and (max-width: 1500px) {
  .card {
    width: 85vw;
  }
}

</style>