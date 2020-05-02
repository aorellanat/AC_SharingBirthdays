<template>
  <div class="background">
     <v-container class="app-card">
        <p class="mt-7">{{ message }}</p>
        <v-row justify="center">
          <v-col v-for="character in characters" :key="character.id" xs="12" sm="6" md="4" lg="3">
            <v-img contain :src="require(`../assets/images/characters/${character.id}_${character.name}.png`)"></v-img>
          </v-col>
        </v-row>
        <v-btn color="teal lighten-2 mb-7" to="/" dark>Try again!</v-btn>
        <p>Want to help keep this website running?1 Support us at <a target="_blank" href="https://www.patreon.com/ac_sharing_birthdays">patreon</a></p>
        <p>Animal Crossing Sharing Birthdays is a fan-made website and is in no way affiliated with Nintendo</p>
    </v-container>
  </div>
</template>

<script>

import data from '@/assets/data/open.json'

export default {
  data: () => ({
    characters: {
      type: Array
    },
    message:{
      type: String
    }
  }),
  props: {
    date : {
      type: String,
      required: true
    }
  },
  beforeMount(){
    this.searchBirthday();
  },
  methods: {
    searchBirthday: function () {
      var dateFields = this.date.split('-').map(Number);
      dateFields[1] = dateFields[1] - 1;

      this.characters = data.series14.filter(function (character) {
        var birthday = new Date(character.birthday);

        if (birthday.getMonth() == dateFields[1] && birthday.getDate() == dateFields[2]) {
          return true;
        } else {
          return false;
        }
      });

      if (this.characters.length > 1) {
        this.message = this.date + ' - YOUR BIRTHDAY TWINS ARE:';
      } else if (this.characters.length === 1) {
        this.message = this.date + ' - YOUR BIRTHDAY TWIN IS:';
      } else {
        this.message = this.date + ' - YOU HAVE NO BIRTHDAY TWIN :(';
      }
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
  width: 70vw;
  margin-top: 3vh;
  margin-bottom: 10vh;
  background-color: white;
  border-radius: 20px;
  font-family: 'Courier New', Courier, monospace;
}

</style>
