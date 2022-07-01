<template>
  <div class="navigation">
    <div class="topPart">
      <div style="padding-top: 100px">
        <v-list class="green_list">
          <v-list-item-group color="primary">
            <v-list-item
                v-for="(link, index) in links"
                :key="`${index}_navList`"
                router
                :to="link.route"
                @click="selectItem(index)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

        </v-list>
      </div>
    </div>
    <div class="bottomPart">
      <div class="afterNav">
        <span>Developed by Maros Mily</span>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "Sidebar-template",
  components: {},
  data: () => ({
    activeItem: null,
    buttonOrientationRight: false,
    showLogo: true,
    links: [
      { text: "Trends", route: "/"},
      { text: "Search", route: "/page2"},

    ],
  }),

  methods: {
    selectItem(x) {
      this.activeItem = x;
    },
  },
  mounted() {

  },

  watch: {},
};
</script>