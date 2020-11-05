<template>
	<div class="customer-signin">
		<div class="customer-signin-header">
			<h3 class="customer-signin-heading">Log In</h3>
			<img src="/assets/icons/close.svg" alt="" class="customer-signin-close" />
		</div>
		<form action="" @submit.prevent="handleSubmit" class="customer-signin-form">
			<div class="customer-signin-form-group">
				<input
					type="email"
					v-model="email"
					class="customer-signin-form-input"
					placeholder="Email Address"
				/>
			</div>
			<div class="customer-signin-form-group">
				<input
					type="password"
					v-model="password"
					class="customer-signin-form-input"
					placeholder="Password"
				/>
			</div>
			<div class="customer-signin-form-group">
				<input
					id="remember-me"
					type="checkbox"
					name="remember_status"
					checked
				/>
				<label for="remember-me" class="customer-signin-form-label"
					>Remember me</label
				>
			</div>
			<div class="customer-signin-form-group">
				<button class="customer-signin-btn">Log In</button>
			</div>
			<a href="#" class="customer-signin-forgot-link">Forgot your password?</a>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: '',
		};
	},
  methods: {
    async handleSubmit() {
      const response = await axios.post('/login', {
        email: this.email,
        password: this.password
      })
     localStorage.setItem('token', response.data.token)
     this.$router.push
    }
  }
};
</script>

<style>
.customer-signin,
.customer-signup {
	max-width: 600px;
	margin: 0 auto;
	padding: 0.5rem;
	border-radius: 5px;
	background-color: white;
	width: 100%;
	top: 50%;
}

.customer-signin-header,
.customer-signup-header {
	padding-bottom: 1rem;
	margin-bottom: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(226, 232, 240, 0.69);
}

.customer-signin-heading,
.customer-signup-heading {
	color: #26425b;
	font-size: 1rem;
}

.customer-signin-close,
.customer-signup-close {
	cursor: pointer;
}

.customer-signin-form {
	max-width: 340px;
	margin: 0 auto;
}

.change-password-form-group,
.customer-signin-form-group {
	margin: 1.85rem 0;
}

.customer-signin-form-input,
.customer-signup-form-input,
.change-password-form-input {
	border: none;
	outline: none;
	width: 100%;
	display: block;
	padding: 0.85rem 1.85rem;
	border: 1px solid #e0e8f3;
	border-radius: 2px;
}
.customer-signin-form-input::placeholder,
.customer-signup-form-input::placeholder,
.change-password-form-input::placeholder {
	font-size: 14px;
	font-weight: var(--fw-light);
	color: #b9c6d8;
	letter-spacing: 1px;
}

.customer-signup-form-input {
	margin: 1rem 0;
}

.customer-signin-form-label {
	color: #7e8da3;
}

.customer-signin-btn,
.customer-signup-btn,
.change-password-btn {
	display: block;
	text-align: center;
	padding: 0.8rem 1rem;
	margin: 3rem 0;
	border-radius: 7px;
	background-color: #6263ba;
	color: white;
	transition: all 0.3s ease-in-out;
}
.customer-signin-btn:hover,
.customer-signup-btn:hover,
.change-password-btn:hover {
	background-color: white;
	box-shadow: inset 0 0 0 1px #6263ba;
	color: #6263ba;
}

.customer-signin-forgot-link,
.customer-signup-forgot-link {
	display: block;
	text-align: center;
	text-decoration: underline;
	color: #6263ba;
}

@media screen and (min-width: 340px) {
	.customer-signin,
	.customer-signup {
		padding: 2rem;
	}
}

@media screen and (min-width: 768px) {
	.customer-signin,
	.customer-signup {
		height: auto;
	}
	.customer-signup-btn {
		margin: 1rem 0;
		grid-column: 2 / -1;
	}
}
</style>
