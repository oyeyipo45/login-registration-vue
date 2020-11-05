<template>
	<div class="home-page">

    <h3 v-if="profile">Hello, {{profile.firstName}}  {{profile.lastName}} </h3>
		<h3 v-if="!profile"> Hello, Please Sign In or Register</h3>
    <p class="home-message">Welcome to the home Page</p>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Home',
  data() {
    return {
      profile: null
    }
  },
	async created() {
		const response = await axios.get('/profile');

		this.profile = response.data
	}
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
}
</style>
