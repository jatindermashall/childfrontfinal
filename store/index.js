import Vuex from "vuex";
import Vue from "vue";
import names from "./names";

Vue.use(Vuex);

// Create store
export const store = new Vuex.Store({
  modules: {
    names
   
  }
});