
import axios from 'axios';
const state = {
    results:[]
};
const getters = {
    allResults: (state) => state.results
};
const actions = {
    async fetchResults({commit},phrase){
        let searchPhrase = phrase;
        const response = await axios.get('https://tenor.googleapis.com/v2/search?q='+searchPhrase+'&key=AIzaSyDcLLyJ1K_iOkTR94Vwa_UtAyFRjbpQnOk&client_key=my_test_app&limit=50');
        commit('setResults',response.data)
    }
};
const mutations = {
    setResults:(state, results) => (state.results = results)
};
export default {
    state,getters,actions,mutations
}