
import axios from 'axios';

const state = {
    trends:[]
};
const getters = {
    allTrends: (state) => state.trends
};
const actions = {
    async fetchTrends({commit}){
        const response = await axios.get('https://g.tenor.com/v1/trending?key=LIVDSRZULELA&limit=80');
        commit('setTrends',response.data)
    }
};
const mutations = {
    setTrends:(state, trends) => (state.trends = trends)
};

export default {
    state,getters,actions,mutations
}