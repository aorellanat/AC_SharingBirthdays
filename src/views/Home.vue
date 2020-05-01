<template>
  <div class="home">
    <v-container class="card">
      <v-img class="logo" src="../assets/logo.png"></v-img>
      <p>Birthday selector</p>
      <v-date-picker
        class="calendar"
        v-model="picker"
        color="teal lighten-2"
      ></v-date-picker>
      <br>
      <v-btn class="button" color="teal lighten-2" style="color: white">Find your birthday twin!</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    picker: new Date().toISOString().substr(0, 10)
  }),
  components: {
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
}

.card {
  margin-top: 5vh;
  background-color: white;
  width: 50vw;
  border-radius: 20px;
}

.calendar {
  width: 30vw;
  margin: auto;
}

.logo {
  margin: auto;
  width: 30vw;
}

.image {
  width: 10vw;
  margin: auto;
}

.selector {
  width: 20vw;
  margin: auto;
}

.button {
  margin-top: 3vh;
  margin-bottom: 3vh;
}

@media only screen and (max-width: 1500px) {
  .card {
    width: 85vw;
  }

  .calendar {
    width: 80vw;
  }

  .logo {
    width: 60vw;
  }
}

</style>
