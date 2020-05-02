<template>
  <div class="background">
    <v-container class="card">
      <v-img class="logo" src="@/assets/logo.png"></v-img>
      <p>Birthday selector</p>
      <v-date-picker
        class="calendar"
        v-model="picker"
        color="teal lighten-2"
      ></v-date-picker>
      <br>
      <v-btn class="mb-5" color="teal lighten-2" @click="sendDate()" dark>Find your birthday twin!</v-btn>
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
