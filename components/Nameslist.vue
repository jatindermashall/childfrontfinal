<template>
  <div>
    <div v-if="filterName && filterName.length && !loading">
      <v-list flat class="w-50 mx-auto">
        <v-subheader>Names</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(name, i) in filterName" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="name.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <div v-else-if="loading">
      Loading...
    </div>
    <div v-else-if="!filterName.length">
      No Name found
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
   data() {
    return {
      names:null,
    };
  },
  name: "NamesList",
  async mounted() {
    await this.setSearch({ text: this.$route.query.search, type: "names" });
  },
  methods:{
    ...mapActions('Names',["setSearch"]),
    // ...mapGetters('Names',["filtername"])
  },
  computed: {
    ...mapState('Names', ['filterName', 'loading'])
  }
}

</script>