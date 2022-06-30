
import axios from 'axios';
const state = {
    trends:[],
    categories:[],
    results:[]

};
const getters = {
    allTrends: (state) => state.trends,
    allCategories: (state) => state.categories,
    allResults: (state) => state.results
};
const actions = {
    async fetchResults({commit},phrase){
        let searchPhrase = phrase;
        const response = await axios.get('https://tenor.googleapis.com/v2/search?q='+searchPhrase+'&key=AIzaSyDcLLyJ1K_iOkTR94Vwa_UtAyFRjbpQnOk&client_key=my_test_app&limit=20&media_filter=gifpreview,mediumgif');
        commit('setResults',response.data)
    },
    async fetchTrends({commit}){
        const response = await axios.get('https://g.tenor.com/v1/trending?key=LIVDSRZULELA&limit=80');
        commit('setTrends',response.data)
    },
    async fetchCategories({commit}){
        const response = await axios.get('https://g.tenor.com/v1/categories?key=LIVDSRZULELA');
        commit('setCategories',response.data)
    }
};
const mutations = {
    setTrends:(state, trends) => (state.trends = trends),
    setCategories:(state, categories) => (state.categories = categories),
    setResults:(state, results) => (state.results = results),

};

export default {
    state,getters,actions,mutations
}