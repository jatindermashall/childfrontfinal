<template>
  <section
    class="main-banner"
    style="background:#242c36 url(img/slider-01.jpg) no-repeat"
  >
    <div class="container">
      <div class="caption">
        <h2>Search Name</h2>
        <form @submit.prevent>
          <fieldset>
            <div class="col-md-4 col-sm-4 no-pad">
              <input
                type="text"
                class="form-control border-right"
                placeholder="Category, character"
                name="search"
                id="search"
                v-model="search"
              />
            </div>
            <div class="col-md-3 col-sm-3 no-pad">
              <select class="selectpicker border-right" name="age">
                <option>Age</option>
                <option>0 Year</option>
                <option>1 Year</option>
                <option>2 Year</option>
                <option>3 Year</option>
                <option>4 Year</option>
                <option>5 Year</option>
                <option>6 Year</option>
                <option>7 Year</option>
                <option>8 Year</option>
                <option>9 Year</option>
                <option>10 Year</option>
              </select>
            </div>
            <div class="col-md-3 col-sm-3 no-pad">
              <select class="selectpicker">
                <option>Select Category</option>
                <option>Funny</option>
                <option>Technology</option>
                <option>Historical</option>
                <option>Successful</option>
              </select>
            </div>
            <div class="col-md-2 col-sm-2 no-pad">
              <button type="button" class="btn seub-btn" @click="searchFilter">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      search: null
    };
  },
  name: "Search",
  methods: {
    ...mapActions("names", ["fetchNames", "setSearch"]),
     searchFilter() {
      if (this.search) {
        //await this.setSearch({ text: this.search, type: "names" });
        if (this.search != "") this.$router.push({ name: "nameFilter", query: { search: this.search } });
      }
    }
  }
};
</script>
