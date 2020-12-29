<template>
  <div>


    <ul v-for="(name, index) in nameArr"
              :key="index">
      <li>{name.id}</li>

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
    ...mapActions('names',["setSearch"]),
     ...mapGetters('names',["filtername"])
  },
  computed: {
    
    
   
    async nameArr() {

      //console.log(this.$route.query.search);
       await this.setSearch({ text: this.$route.query.search, type: "names" });
     console.log(this.filtername);
      if (this.$nuxt.$route.name === "nameFilter") return this.filtername;

      }
  }



}

</script>