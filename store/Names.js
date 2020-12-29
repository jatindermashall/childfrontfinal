import axios from "axios";

export const state = () => ({
  names: [],
  filterName: [],
  loading: false
})

export const getters = {
  allName: state => state.names,
  filtername: state => state.filterName
};

export const actions = {
  async fetchNames({ commit }) {
    //alert(process.env.apiUrl);
    const response = await axios.get(process.env.apiUrl + "/childnames");

    //console.log(response.data);

    commit("setNames", response.data);
    return true;
  },

  async getName({ commit }, payload) {
    var urlp = payload.split(".");
    //console.log(urlp);
    const response = await axios.get(
      process.env.apiUrl + `/names/${urlp[0]}`
    );
    console.log(response.data);
    commit("setSelectedName", response.data);
  },
  async setSearch({ state, commit, dispatch }, payload) {
   //console.log(process.env.apiUrl);
    if (payload.type.toLowerCase() === "names") {
      commit("setLoading", true);
      try {
        let result = await axios.get(
          process.env.apiUrl +
            `/childnames?name_contains=${payload.text}`
        );
  
        commit("setSearch", result.data);
      } catch (error) {
        console.log(error, 'error')
      }
      commit("setLoading", false);
     //console.log(state.filterName);
      //commit("setNamesFilter", result.data);
     //console.log(result.data);
    }
    
  }
};

export const mutations = {
  setNames: (state, names) => (state.names = names),
  setSearch(state, payload) {
    state.filterName = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
