<template>
  <v-row justify="center" class="ma-0 pa-4">
    <v-col cols="12" md="8" lg="10" class="card">
      <v-row justify="center" class="content ">
        <v-col cols="12" class="pt-0 content-column">
          <div v-for="trend in allTrends.results" :key="trend.media[0].loopedmp4.preview">
            <v-img class="image" :lazy-src=trend.media[0].nanogif.url :src=trend.media[0].mediumgif.url></v-img>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions(['fetchTrends'])
  },
  computed:
      mapGetters(['allTrends']),
  created() {
    this.fetchTrends();
  }
}
</script>