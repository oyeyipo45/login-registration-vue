<template>
	<div class="home-page">
		<h3 v-if="profile">
			Hello, {{ profile.firstName }} {{ profile.lastName }}
		</h3>
		<div class="welcome-container">
			<h3 class="welcome-message" v-if="!profile">
				Hello, Please Sign In or Register
			</h3>
			<p><i class="bx bxs-up-arrow-circle bx-flashing"></i></p>
		</div>
		<h1 class="home-message">Welcome Home</h1>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Home',
	computed: {
		...mapGetters(['profile']),
	},
};
</script>

<style>
.home-page {
	height: 100vh;
	padding: 5rem 3rem;
	max-width: 1200px;
	margin: 0 auto;
	width: 95%;
	color: black;
}

.home-message {
	left: 0;
	right: 0;
	top: 0;
	text-align: center;
	bottom: 0;
	margin: auto;
	height: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid blue;
	color: var(--second-color);
}

.welcome-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid red;
}

.bx-flashing {
	font-size: 2rem;
	color: blue;
}

.welcome-message {
	color: var(--second-color);
}
</style>
