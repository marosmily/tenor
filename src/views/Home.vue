<style lang="scss">
.trendCard{
 height: 100%;
  position: relative;
  opacity: 85%;
  span{
    font-size: 25px;
    font-weight: 700;
  }
  img{
    position: relative;
    top: 50%;
    font-size: 25px;
    left: 50%;
    opacity: 0.1;
    transform: translateX(-50%) translateY(-50%)
  }
}
</style>
<template>

  <v-row justify="center" class="ma-0 pa-4">
    <v-col cols="12" md="8" lg="10" class="card">
      <v-row justify="center" class=" pa-2">
        <v-tabs height="190px"
            background-color="white"
            center-active
             hide-slider
        >
          <v-tab v-for="category in allCategories.tags" :key="category" >
            <div class="trendCard" @click="categoryClicked(category)">
              <v-img height="80%" width="200px"  :src=category.image></v-img>
              <span>{{category.name}}</span>
            </div>

            </v-tab>
        </v-tabs>
      </v-row>
      <v-row justify="center" class="content ">
        <h1 style="color: #3FAEA3" v-if="!activeCategory">No active category -> showing trends</h1>
        <v-col cols="12" class="pt-0 content-column">
          <div v-if="!activeCategory">
            <v-img v-for="trend in allTrends.results" :key="trend.media[0].loopedmp4.preview" class="image" :lazy-src=trend.media[0].nanogif.url :src=trend.media[0].mediumgif.url></v-img>
          </div>
          <div v-else>
            <v-img v-for="result in allResults.results" :key="result.id" class="image"
                   :lazy-src=result.media_formats.gifpreview.url
                   :src=result.media_formats.mediumgif.url />
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
    activeCategory:''
  }),
  methods: {
    categoryClicked:function (category){
      this.fetchResults(category.searchterm);
      this.activeCategory=category.searchterm
    },
    ...mapActions(['fetchTrends']),
    ...mapActions(['fetchCategories']),
    ...mapActions(['fetchResults'])
  },
  computed:{
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