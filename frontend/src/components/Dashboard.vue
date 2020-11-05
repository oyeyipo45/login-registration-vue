<template>
	<div class="home-page">
		<div class="welcome-container">
			<h3>
				Hello, {{ profile.firstName }} {{ profile.lastName }}
			</h3>
			<p><i class="bx bxs-up-arrow-circle bx-flashing"></i></p>
		</div>
		<h1
		
			class="home-message"
		>
			<h1 class="glitch" data-text="Dashboard">
				Dashboard
			</h1>
		</h1>
		
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import axios from 'axios';
export default {
	name: 'Dashboard',
  async created() {
		const response = await axios.get('/profile');
		this.$store.dispatch('profile', response.data);
	},
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
	border: 2px solid var(--first-color);
	color: var(--second-color);
	margin-top: 5rem;
	border-radius: 0.5rem;
}

.welcome-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.bx-flashing {
	font-size: 2rem;
	color: var(--first-color);
}

.welcome-message {
	color: var(--second-color);
}

@media screen and (max-width: 488px) {
	.home-page {
		padding: 5rem 1rem !important;
		width: 95%;
	}

 .glitch {
	position: relative;
	color: black;
	font-size: 2rem;
	letter-spacing: 3px;
	animation: glitch-skew 1s infinite linear alternate-reverse;
}
}

@media screen and (min-width: 489px) {
.glitch {
	position: relative;
	color: black;
	font-size: 2.5rem;
	letter-spacing: 3px;	animation: glitch-skew 1s infinite linear alternate-reverse;
} }
@media screen and (min-width: 699px) {
.glitch {
	position: relative;
	color: black;
	font-size: 4rem;
	letter-spacing: 3px;
	animation: glitch-skew 1s infinite linear alternate-reverse;
} }

.glitch::before {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	left: 2px;
	text-shadow: -2px 0 #ff00c1;
	clip: rect(44px, 450px, 56px, 0);
	animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitch::after {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	left: -2px;
	text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
	animation: glitch-anim2 1s infinite linear alternate-reverse;
}
@keyframes glitch-anim {
	0% {
		clip: rect(21px, 9999px, 43px, 0);
		transform: skew(0.28deg);
	}
	5% {
		clip: rect(3px, 9999px, 98px, 0);
		transform: skew(0.08deg);
	}
	10% {
		clip: rect(60px, 9999px, 1px, 0);
		transform: skew(0.63deg);
	}
	15% {
		clip: rect(26px, 9999px, 36px, 0);
		transform: skew(1deg);
	}
	20% {
		clip: rect(4px, 9999px, 98px, 0);
		transform: skew(0.56deg);
	}
	25% {
		clip: rect(46px, 9999px, 28px, 0);
		transform: skew(0.78deg);
	}
	30% {
		clip: rect(72px, 9999px, 72px, 0);
		transform: skew(0.78deg);
	}
	35% {
		clip: rect(83px, 9999px, 42px, 0);
		transform: skew(0.75deg);
	}
	40% {
		clip: rect(6px, 9999px, 16px, 0);
		transform: skew(0.9deg);
	}
	45% {
		clip: rect(6px, 9999px, 94px, 0);
		transform: skew(0.22deg);
	}
	50% {
		clip: rect(22px, 9999px, 63px, 0);
		transform: skew(0.68deg);
	}
	55% {
		clip: rect(20px, 9999px, 29px, 0);
		transform: skew(0.15deg);
	}
	60% {
		clip: rect(91px, 9999px, 35px, 0);
		transform: skew(0.73deg);
	}
	65% {
		clip: rect(61px, 9999px, 9px, 0);
		transform: skew(0.61deg);
	}
	70% {
		clip: rect(59px, 9999px, 74px, 0);
		transform: skew(0.12deg);
	}
	75% {
		clip: rect(31px, 9999px, 75px, 0);
		transform: skew(0.46deg);
	}
	80% {
		clip: rect(89px, 9999px, 8px, 0);
		transform: skew(0.56deg);
	}
	85% {
		clip: rect(31px, 9999px, 18px, 0);
		transform: skew(0.62deg);
	}
	90% {
		clip: rect(90px, 9999px, 47px, 0);
		transform: skew(0.61deg);
	}
	95% {
		clip: rect(56px, 9999px, 46px, 0);
		transform: skew(0.52deg);
	}
	100% {
		clip: rect(100px, 9999px, 34px, 0);
		transform: skew(0.64deg);
	}
}
@keyframes glitch-anim2 {
	0% {
		clip: rect(98px, 9999px, 90px, 0);
		transform: skew(0.4deg);
	}
	5% {
		clip: rect(72px, 9999px, 78px, 0);
		transform: skew(0.14deg);
	}
	10% {
		clip: rect(1px, 9999px, 26px, 0);
		transform: skew(0.97deg);
	}
	15% {
		clip: rect(49px, 9999px, 10px, 0);
		transform: skew(0.83deg);
	}
	20% {
		clip: rect(43px, 9999px, 85px, 0);
		transform: skew(0.39deg);
	}
	25% {
		clip: rect(16px, 9999px, 100px, 0);
		transform: skew(0.84deg);
	}
	30% {
		clip: rect(19px, 9999px, 77px, 0);
		transform: skew(0.8deg);
	}
	35% {
		clip: rect(20px, 9999px, 79px, 0);
		transform: skew(0.61deg);
	}
	40% {
		clip: rect(29px, 9999px, 80px, 0);
		transform: skew(0.54deg);
	}
	45% {
		clip: rect(29px, 9999px, 74px, 0);
		transform: skew(0.11deg);
	}
	50% {
		clip: rect(39px, 9999px, 94px, 0);
		transform: skew(0.63deg);
	}
	55% {
		clip: rect(77px, 9999px, 50px, 0);
		transform: skew(0.57deg);
	}
	60% {
		clip: rect(22px, 9999px, 52px, 0);
		transform: skew(0.66deg);
	}
	65% {
		clip: rect(59px, 9999px, 42px, 0);
		transform: skew(0.96deg);
	}
	70% {
		clip: rect(32px, 9999px, 91px, 0);
		transform: skew(0.11deg);
	}
	75% {
		clip: rect(52px, 9999px, 94px, 0);
		transform: skew(0.89deg);
	}
	80% {
		clip: rect(48px, 9999px, 93px, 0);
		transform: skew(0.76deg);
	}
	85% {
		clip: rect(17px, 9999px, 62px, 0);
		transform: skew(0.57deg);
	}
	90% {
		clip: rect(35px, 9999px, 93px, 0);
		transform: skew(0.32deg);
	}
	95% {
		clip: rect(23px, 9999px, 97px, 0);
		transform: skew(0.77deg);
	}
	100% {
		clip: rect(57px, 9999px, 78px, 0);
		transform: skew(0.9deg);
	}
}
@keyframes glitch-skew {
	0% {
		transform: skew(-3deg);
	}
	10% {
		transform: skew(0deg);
	}
	20% {
		transform: skew(1deg);
	}
	30% {
		transform: skew(-4deg);
	}
	40% {
		transform: skew(3deg);
	}
	50% {
		transform: skew(5deg);
	}
	60% {
		transform: skew(4deg);
	}
	70% {
		transform: skew(-4deg);
	}
	80% {
		transform: skew(4deg);
	}
	90% {
		transform: skew(-4deg);
	}
	100% {
		transform: skew(-4deg);
	}
}
</style>
