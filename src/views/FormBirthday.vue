<template>
  <div class="background">
     <v-container class="card">
        <p class="title mt-7">{{ message }}</p>
        <v-row justify="center">
          <v-col v-for="character in characters" :key="character.id" xs="12" sm="6" md="4" lg="4">
            <v-img :src="require(`../assets/images/characters/${character.id}_${character.name}.png`)"></v-img>
          </v-col>
        </v-row>
        <v-btn class="ma-10" color="teal lighten-2" dark>SHARE WITH THE COMUNITY</v-btn>
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
      } else {
        this.message = this.date + ' - YOUR BIRTHDAY TWINS IS:';
      }
    }
  }
}
</script>
