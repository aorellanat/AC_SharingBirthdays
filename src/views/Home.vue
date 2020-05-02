<template>
  <div class="background">
    <v-container class="app-card">
      <v-img class="logo" src="@/assets/logo.png"></v-img>
      <p>Birthday selector</p>
      <v-date-picker
        class="calendar"
        v-model="picker"
        color="teal lighten-2"
      ></v-date-picker>
      <br>
      <v-btn class="my-5" color="teal lighten-2" @click="sendDate()" dark>Find your birthday twin!</v-btn>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    picker: new Date().toISOString().substr(0, 10)
  }),
  methods: {
    sendDate: function () {
      this.$router.push({ name: 'FormBirthday', params: { date: this.picker } });
    }
  }
}
</script>

<style scoped>

.background {
  width: 100%;
  height: 100%;
  background-image: url('../assets/background.png');
  background-size: cover;
  text-align: center;
}

.app-card {
  width: 50vw;
  margin-top: 3vh;
  margin-bottom: 10vh;
  background-color: white;
  border-radius: 20px;
  font-family: 'Courier New', Courier, monospace;
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

@media only screen and (max-width: 1500px) {
  .calendar {
    width: 80vw;
  }

  .logo {
    width: 60vw;
  }
}

</style>
