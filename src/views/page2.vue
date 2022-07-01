<style lang="scss">
@import "@/assets/style.scss";
</style>
<template>
  <v-row justify="center" class="ma-0 pa-0">
    <v-col cols="12" md="8" lg="10" :class="[$vuetify.breakpoint.mdAndDown ?  'cardMobile':'card' ]">
      <v-row justify="center" class="pa-4 pr-5 ma-0">
          <v-text-field color="#3FAEA3" label="Search" placeholder="Search" outlined v-model="input" hide-details v-on:keyup="timer(input)" />
      </v-row>
      <v-row justify="center" class="content">
        <v-col cols="12" :style="[$vuetify.breakpoint.mdAndDown ? { 'column-count': 2 } : {  'column-count': 4}]" class="pt-0 content-column">
            <v-img v-for="result in allResults.results" :key="result.id" class="image"
                   :lazy-src=result.media_formats.gifpreview.url
                   :src=result.media_formats.mediumgif.url />
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
        time:null
      }
  ),
  methods: {
    timer:function(input) {
      let delay = 2000
      clearTimeout(this.time)
      this.time=setTimeout(() => {
        if (input.length > 2) {
          console.log(input,delay)
          this.fetchResults(input);
        }      }, delay)
    },

    ...mapActions(['fetchResults'])
  },

  computed:
      mapGetters(['allResults']),

  created() {
    this.fetchResults('up there');
  }
}
</script>