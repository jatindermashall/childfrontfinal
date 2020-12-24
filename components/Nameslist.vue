<template>
  <div>


    <ul v-for="(name, index) in nameArr"
              :key="index">
      <li>{name}</li>

    </ul>
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
  methods:{
    ...mapActions("names",["fetchNames"])
  },
  computed: {
    ...mapState( [ "filterName"]),
    ...mapGetters("names", ["allNames","filtername"]),
    nameArr() {
    
      if (this.$nuxt.$route.name === "nameFilter") return this.filterName;

      }
  }



}

</script>