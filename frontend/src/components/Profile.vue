<template>
	<div>
		<section class="profile section" id="profile">
			<h2 class="section-title">Welcome {{ profile.firstName }} {{ profile.lastName }}</h2>
			<div class="profile__container bd-grid">
				<p class="down">
					First Name : {{ profile.firstName }} 
				</p>
				<p class="down">
					Last Name : {{ profile.lastName }} 
				</p>
				
				<p class="down">Email : {{ profile.email }}</p>
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Profile',
	computed: {
		...mapGetters(['profile']),
	},
};
</script>


<style >
	.profile{
		width: 95%;
		margin: 5rem auto;
	}


	@media screen and  (max-width: 768px) {
		.profile{
			padding: 2%;
		}

		.down {
			margin-bottom: 1.5rem;
		}
	}
</style>