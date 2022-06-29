<style>
.card {
  background: white;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.56);

}
.content {
  height: 75vh;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.content-column {
  column-count: 4;
  column-gap: 30px;
  margin: 0 auto;
  padding: 30px
}
.image {
  height: auto;
  margin: 15px 0 0 0;
  width: 100%;
  display: block;
  box-sizing: border-box
}
::-webkit-scrollbar-thumb:hover {
  background: #37998f;
  border: 3px solid transparent;
}

::-webkit-scrollbar-thumb {
  background: #3FAEA3;
  border-radius: 5pt;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar {
  width: 5pt;
  height: 5pt;
}
</style>
<template>
  <v-row justify="center" class="ma-0 pa-4" >
    <v-col cols="12" md="8" lg="10" class="card">
      <v-row justify="center" class="pa-2 ma-0">
        <v-col cols="12" class=" ma-0 pt-4 pb-0">
          <v-text-field
              color="#3FAEA3"
              label="Search"
              placeholder="Search"
              outlined v-model="input" hide-details
              v-on:keyup="saveInput(input)"

          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" class="content  ">
        <v-col cols="12" class="pt-0 content-column">
          <div v-for="result in allResults.results" :key="result.media_formats.mp4.url">
            <v-img class="image" :lazy-src=result.media_formats.gifpreview.url
                   :src=result.media_formats.mediumgif.url></v-img>
          </div>
        </v-col>

      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data: () => ({
        input: '',
        timer: null,
        limit:10,
      }
  ),
  methods: {
    saveInput: function (input) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      setTimeout(() => {
        if (input.length > 2) {
          this.fetchResults(input);
        }
      }, 200)
    },
    ...mapActions(['fetchResults'])
  },
  computed:
      mapGetters(['allResults']),

  created() {
    this.fetchResults( 'up there');
  }
}
</script>