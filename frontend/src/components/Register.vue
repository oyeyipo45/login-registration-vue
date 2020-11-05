<template>
	<div class="customer-signup">
		<div class="customer-signup-header">
			<h3 class="customer-signup-heading">Create an account</h3>
			<img src="/assets/icons/close.svg" alt="" class="customer-signup-close" />
		</div>
		<span > <error class="error"  v-if="error" :error="error" />  </span>
		<form action="" @submit.prevent="handleSubmit">
			

			<div class="customer-signup-form-group">
				<input
					type="text"
					v-model="firstName"
					class="customer-signup-form-input"
					placeholder="First name"
					required
				/>
				<input
					type="text"
					v-model="lastName"
					class="customer-signup-form-input"
					placeholder="Last name"
					required
				/>
			</div>
			<div class="customer-signup-form-group">
				<input
					type="email"
					v-model="email"
					class="customer-signup-form-input"
					placeholder="Email Address"
					required
				/>
			</div>
			<div class="customer-signup-form-group">
				<input
					type="password"
					v-model="password"
					class="customer-signup-form-input"
					placeholder="Password"
					required
				/>
				<input
					type="password"
					v-model="passwordConfirm"
					class="customer-signup-form-input"
					placeholder="Confirm Password"
					required
				/>
			</div>
			<div class="customer-signup-form-group">
				<button class="customer-signup-btn">Create my account</button>
			</div>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
import Error from './Error.vue';
export default {
	name: 'Register',
	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirm: '',
			error: '',
		};
	},

	components: {
		Error
	},
	methods: {
		async handleSubmit() {
			try {
				const data = {
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				password: this.password,
				passwordConfirm: this.passwordConfirm,
			};
			await axios.post('/', data);

			this.$router.push('/login');
			} catch (e) {
				this.error = e.response.data
			}
		},
	},
};
</script>
