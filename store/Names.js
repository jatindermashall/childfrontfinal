import axios from "axios";

const state = {
  names: [],
  selectedName: {},
  filtersearch: {},
  filterName: []
};

const getters = {
  allName: state => state.names,
  filtername: state => state.filterName
};

const actions = {
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
      let result = await axios.get(
        process.env.apiUrl +
          `/childnames?name_contains=${payload.text}`
      );
      //console.log(result.data);
      commit("setNamesFilter", result.data);

      //console.log(result.data);
    }
    commit("setSearch", payload);
  }
};

const mutations = {
  setNames: (state, names) => (state.names = names),
  setNamesFilter: (state, names) => (state.filterName = names), 
  setSearch: (state, payload) => (state.filterName = payload)
};

export default {
  state,
  getters,
  actions,
  mutations
};
