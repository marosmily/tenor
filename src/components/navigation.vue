<style lang="scss" scoped>
.navigation {
  position: relative;
  height: 100%;

  .bottomPart {
    position: absolute;
    bottom: 0;
    right: 180px;
  }
}

#beforeNav {
  position: relative;
  height: 90px;

  .collapseBtn {
    position: absolute;
    top: 50%;
    right: -14px;
    z-index: 10;

    button {
      background: #fff;
      transition: all 0.4s linear;

      &::before {
        background: transparent;
      }
    }

    .buttonOrientationRight {
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    #no-background-hover::before {
      background-color: transparent !important;
    }
  }
}

.green_list .v-list-item-group .v-list-item {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #a1a1c1;
  border-bottom: 1px solid #e9e8fc;
  border-left: 4px solid transparent;

  &:first-of-type {
    border-top: 1px solid #e9e8fc;
  }
}

.green_list .v-list-item-group .v-list-item--active {
  background-color: #f2f2f9;
  color: #3FAEA3;
  font-weight: 700;
  border-left: 4px solid;
}

.v-list-item {
  padding-left: 30px;
}


.v-navigation-drawer--mini-variant .v-list-item {
  padding-left: 16px;
}



.afterNav {
  padding: 0 0 31px 48px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  font-size: 12px;
  color: #24242E;
}
</style>

<template>
  <div class="navigation">
    <div class="topPart">
      <div id="beforeNav">

      </div>
      <div>
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
        <span>Developed by CODEWITCHER</span>
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