<template>
	<div class="customer-signup">
		<div class="customer-signup-header">
			<h3 class="customer-signup-heading">Create an account</h3>
			<img src="/assets/icons/close.svg" alt="" class="customer-signup-close" />
		</div>
		<form action="" @submit.prevent="handleSubmit">
			<div class="customer-signup-form-group">
				<input
					type="text"
					v-model="firstName"
					class="customer-signup-form-input"
					placeholder="First name"
				/>
				<input
					type="text"
					v-model="lastName"
					class="customer-signup-form-input"
					placeholder="Last name"
				/>
			</div>
			<div class="customer-signup-form-group">
				<input
					type="email"
					v-model="email"
					class="customer-signup-form-input"
					placeholder="Email Address"
				/>
			</div>
			<div class="customer-signup-form-group">
				<input
					type="password"
					v-model="password"
					class="customer-signup-form-input"
					placeholder="Password"
				/>
				<input
					type="password"
					v-model="passwordConfirm"
					class="customer-signup-form-input"
					placeholder="Confirm Password"
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

export default {
	name: 'Register',
	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirm: '',
		};
	},
	methods: {
		async handleSubmit() {
			const data = {
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				password: this.password,
				passwordConfirm: this.passwordConfirm,
			};
			await axios.post('/', data);

			this.$router.push('/login');
		},
	},
};
</script>
