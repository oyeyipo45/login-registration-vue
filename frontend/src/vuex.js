import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	profile: null
};

const store = new Vuex.Store({
	state,
	getters: {
		profile: (state) => {
			return state.profile;
		}
	},
	actions: {
		profile(context, profile) {
			context.commit('profile', profile);
		},
	},
	mutations: {
		profile(state, profile) {
			state.profile = profile;
		},
	},
});

export default store;
