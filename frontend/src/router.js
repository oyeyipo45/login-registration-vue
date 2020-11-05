import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/login', component: Login },
		{ path: '/register', component: Register },
        { path: '/user-info', component: Profile },
        { path: '/dashboard', component: Dashboard },
	],
});
