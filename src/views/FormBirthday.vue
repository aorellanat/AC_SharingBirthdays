<template>
  <div class="background">
    <v-container class="app-card">
      <h3 class="mt-7">{{ message }}</h3>
      <v-row justify="center">
        <v-col v-for="character in characters" :key="character.id" xs="12" sm="6" md="4" lg="3">
          <v-img
            contain
            :src="require(`../assets/images/characters/${character.id}_${character.name}.png`)"
          ></v-img>
        </v-col>
      </v-row>
      <v-btn color="teal lighten-2 mt-5 mb-7" to="/" dark>Try again!</v-btn>
      <br />
      <v-row>
        <v-col>
          <div class="twitter-button">
            <ShareNetwork
              network="twitter"
              url="https://animalcrossingsharingbirthdays.web.app/"
              :title="getTwins() + '. Find yours at AC Sharing Birthdays!'"
              hashtags="acsharingbirthdays"
              style="color: white;"
            >
              <font-awesome-icon class="fab fah fa-lg" :icon="['fab','twitter']"/>
              <span> Share on Twitter</span>
            </ShareNetwork>
          </div>
        </v-col>
        <v-col>
          <div class="facebook-button">
            <ShareNetwork
              network="facebook"
              url="https://animalcrossingsharingbirthdays.web.app/"
              :quote="getTwins() + '. Find yours at AC Sharing Birthdays!'"
              hashtags="acsharingbirthdays"
              style="color: white;"
            >
              <font-awesome-icon class="fab fah fa-lg" :icon="['fab','facebook']" />
              <span> Share on Facebook</span>
            </ShareNetwork>
          </div>
        </v-col>
      </v-row>
      <p>
        Want to help keep this website running? Support us at
        <strong>patreon</strong>
      </p>
      <a target="_blank" href="https://www.patreon.com/ac_sharing_birthdays">
        <v-btn class="patreon-button mb-5"></v-btn>
      </a>
      <p>Animal Crossing Sharing Birthdays is a fan-made website and is in no way affiliated with Nintendo</p>
    </v-container>
  </div>
</template>

<script>
import data from "@/assets/data/open.json";

export default {
  data: () => ({
    characters: {
      type: Array
    },
    message: {
      type: String
    }
  }),
  props: {
    date: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    this.searchBirthday();
  },
  methods: {
    searchBirthday: function() {
      var dateFields = this.date.split("-").map(Number);
      dateFields[1] = dateFields[1] - 1;

      this.characters = data.series14.filter(function(character) {
        var birthday = new Date(character.birthday);

        if (
          birthday.getMonth() == dateFields[1] &&
          birthday.getDate() == dateFields[2]
        ) {
          return true;
        } else {
          return false;
        }
      });

      if (this.characters.length > 1) {
        this.message = this.date + " - Your birthday twins are:";
      } else if (this.characters.length === 1) {
        this.message = this.date + " - Your birthday twin is:";
      } else {
        this.message = this.date + " - You have no birthday twin :(";
      }
    },
    getTwins: function() {
      let count = this.characters.length

      if (count == 0) {
        return "I realized that I don't have birthday twins"
      } else if (count == 1) {
        return "My birthday twin is " + this.characters[0].name
      } else {
        let string = "My birthday twins are "
        for (let character of this.characters) {
          if (character.name == this.characters[this.characters.length - 1].name) {
            string += " and "
          } else if (character.name != this.characters[0].name){
            string += ", "
          }

          string += character.name
        }
        return string
      }
    }
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background-image: url("../assets/background.png");
  background-size: cover;
  text-align: center;
}

.app-card {
  width: 50vw;
  margin-top: 3vh;
  margin-bottom: 10vh;
  background-color: white;
  border-radius: 20px;
  font-family: "Courier New", Courier, monospace;
}

.patreon-button {
  background-image: url("../assets/patron.png");
  background-size: 100% 100%;
  width: 10vw;
}

.twitter-button {
  color: white;
  background-color: #00acee;
  padding: 7px;
}

.facebook-button {
  color: white;
  background-color: #3b5998;
  padding: 7px;
}


@media only screen and (max-width: 600px) {
  .app-card {
    width: 90vw;
  }

  .patreon-button {
    width: 40vw;
  }
}
</style>
