<template>
  <v-app style="background: #f2f2f9;">
    <v-app-bar clipped-left app color="#24242E" elevation="0">
      <app-bar-component/>
    </v-app-bar>
    <v-navigation-drawer
        id="leftNavbar"
        v-if="$vuetify.breakpoint.lgAndUp"
        app
        clipped
        left
        :mini-variant-width="79"
        width="297"
    >
      <navigation/>
    </v-navigation-drawer>
    <v-navigation-drawer
        id="leftNavbar"
        v-if="$vuetify.breakpoint.mdAndDown"
        v-model="navigationBar"
        left
        fixed
        temporary
    >
      <navigation/>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import appBarComponent from "./components/appBarComponent";
import navigation from "./components/navigation";

export default {
  components: {
    appBarComponent,
    navigation
  },
  data: () => ({
    showMiniVariant: false,
    navigationBar: false,
  }),
  mounted: function () {
    this.$root.$on("showHideNavigation", () => {
      this.navigationBar = !this.navigationBar;
    });
  },
};
</script>
