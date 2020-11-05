import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './axios';
import store from './vuex';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show');
		});
	}
};

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	navLink.forEach((n) => n.classList.remove('active'));
	this.classList.add('active');

	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
