<style scoped lang="scss">

#appBar {
  .col {
    padding: 0;
    margin: 0;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 24px;
    padding-left: 20px;
    color: #FFFFFF;
    height: 100%
  }
}

</style>
<template>
  <v-row id="appBar" justify="center" align="center">
    <v-col cols="auto" style="margin-right: 5px">
      <h2>T-e-n-o-r Test</h2>
    </v-col>
    <v-spacer></v-spacer>
    <v-col v-if="$vuetify.breakpoint.mdAndDown" cols="auto" @click="navigationSwitch">
      <v-icon dense dark>mdi-menu</v-icon>
    </v-col>
  </v-row>
</template>

<script>


export default {
  components: {},
  data: () => ({}),
  mounted() {
  },
  computed: {},
  methods: {
    navigationSwitch: function () {
      this.$root.$emit("showHideNavigation");
    }
  }
}

</script>
