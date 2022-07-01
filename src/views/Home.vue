<style>
.span{
  font-size: 12px;
  font-weight: 700;
}
.span:active{
  color: red;
}
.tagCard{
  width: 110px;  height: 90px; padding: 5px;
}.tagCard:after{
  width: 110px;  height: 90px; padding: 5px; background: red;
}
</style>
<template>
  <v-row justify="center" class="ma-0 pa-0">
    <v-col cols="12" md="8" lg="10" :class="[$vuetify.breakpoint.mdAndDown ?  'cardMobile':'card' ]">
      <v-row justify="center" class=" pa-2">
        <v-tabs height="110px" hide-slider center-active
                background-color="white"
        >
          <v-tab @click="activeCategory=''">#trending</v-tab>
          <v-tab v-for="category in allCategories.tags" :key="category.name">
            <div class="tagCard"  @click="categoryClicked(category)">
            <v-img  height="80px" :src=category.image></v-img>
            <span class="span">{{ category.name }}</span>
            </div>
          </v-tab>
        </v-tabs>
      </v-row>
      <v-row justify="center" class="content ">
        <v-col cols="12" :style="[$vuetify.breakpoint.mdAndDown ? { 'column-count': 2 } : {  'column-count': 4}]"
               class="pt-0 content-column">
          <div v-if="!activeCategory">
            <v-img v-for="trend in allTrends.results" :key="trend.media[0].loopedmp4.preview" class="image"
                   :lazy-src=trend.media[0].nanogif.url :src=trend.media[0].mediumgif.url></v-img>
          </div>
          <div v-else>
            <v-img v-for="result in allResults.results" :key="result.id" class="image"
                   :lazy-src=result.media_formats.gifpreview.url
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
    activeCategory: '',
    tabs: 0
  }),
  methods: {
    categoryClicked: function (category) {
      this.fetchResults(category.searchterm);
      this.activeCategory = category.searchterm
    },
    ...mapActions(['fetchTrends']),
    ...mapActions(['fetchCategories']),
    ...mapActions(['fetchResults'])
  },
  computed: {
    ...mapGetters(['allTrends']),
    ...mapGetters(['allResults']),
    ...mapGetters(['allCategories'])
  },
  mounted() {
  },

  created() {
    this.fetchTrends();
    this.fetchCategories();
  }
}
</script>