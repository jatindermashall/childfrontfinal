import Vuex from "vuex";
import Vue from "vue";
import names from "./names.js"



// Create store
export const store = new Vuex.Store({
  modules: {
    names
   
  }
});