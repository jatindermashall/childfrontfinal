import Vuex from "vuex";
import Vue from "vue";
import names from "./names";



// Create store
export const store = new Vuex.Store({
  modules: {
    names
   
  }
});