<template>
	<div>
		<div><Nav /></div>

		<router-view />
	</div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
	name: 'App',

	components: {
		Nav,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* main styles */
:root {
	--header-height: 3rem;
	--font-semi: 600;
}

:root {
	--first-color: #4070f4;
	--second-color: #0e2431;
}

:root {
	--body-font: 'Poppins', sans-serif;
	--big-font-size: 2rem;
	--h2-font-size: 1.25rem;
	--normal-font-size: 0.938rem;
}

@media screen and (min-width: 768px) {
	:root {
		--body-font: 'Poppins', sans-serif;
		--big-font-size: 3.5rem;
		--h2-font-size: 2rem;
		--normal-font-size: 1rem;
	}
}

:root {
	--mb-0\5: 0.5rem;
	--mb-1: 1rem;
	--mb-1\5: 1.5rem;
	--mb-2: 2rem;
	--mb-2\5: 2.5rem;
	--mb-3: 3rem;
	--mb-3\5: 3.5rem;
	--mb-4: 4rem;
}

:root {
	--z-back: -10;
	--z-normal: 1;
	--z-tooltip: 10;
	--z-fixed: 100;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
	margin: var(--header-height) 0 0 0;
	font-family: var(--body-font);
	font-size: var(--normal-font-size);
}

h1,
h2,
p {
	margin: 0;
}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

a {
	text-decoration: none;
}

img {
	max-width: 100%;
	height: auto;
	display: block;
}

.error {
	height: 4rem;
	padding: 0.5rem 0rem;
	color: red;
	background-color: pink;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* sections  */

.section-title {
	position: relative;
	font-size: var(--h2-font-size);
	color: var(--first-color);
	margin-top: var(--mb-2);
	margin-bottom: var(--mb-4);
	text-align: center;
}

.section-title::after {
	position: absolute;
	content: '';
	width: 64px;
	height: 0.18rem;
	left: 0;
	right: 0;
	margin: auto;
	top: 2rem;
	background-color: var(--first-color);
}

section {
	padding-bottom: 3rem;
}

.bd-grid {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

/* nav */
.l-header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--z-fixed);
	background-color: #fff;
	box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
}

.nav {
	height: var(--header-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: var(--font-semi);
}
.nav_logo {
	color: var(--first-color);
}
@media screen and (max-width: 767px) {
	.nav__menu {
		position: fixed;
		top: var(--header-height);
		right: -100%;
		width: 80%;
		height: 100%;
		padding: 1.5rem;
		background-color: var(--second-color);
		transition: 0.5s;
	}

	.bd-grid {
		width: 95%;
		max-width: 600px;
		left: 0;
		right: 0;
		padding: 0;
		margin: 0 auto;
	}

	.home__title {
		font-size: 1.4rem;
	}
}

.homer_img {
	border-radius: 50%;
}

.nav__item {
	margin-bottom: var(--mb-3);
}

.nav__link {
	position: relative;
	color: #fff;
}

.nav__link:hover {
	position: relative;
}

.nav__link:hover::after {
	position: absolute;
	content: '';
	width: 100%;
	height: 0.18rem;
	left: 0;
	top: 1.5rem;
	background-color: var(--first-color);
}

.nav__logo {
	color: var(--second-color);
}

.nav__toggle {
	color: var(--second-color);
	font-size: 1.5rem;
	cursor: pointer;
}

.active::after {
	position: absolute;
	content: '';
	width: 100%;
	height: 0.18rem;
	left: 0;
	top: 1.5rem;
	background-color: var(--first-color);
}

.show {
	right: 0;
}

@media screen and (min-width: 766px) {
	.section {
		padding-top: 4rem;
		padding-bottom: 3rem;
		margin-top: 3rem;
	}

	.section-title {
		margin-bottom: var(--mb-4);
	}

	.section-title::after {
		width: 80px;
		top: 3rem;
	}

	.nav {
		height: calc(var(--header-height) + 1rem);
	}

	.nav__list {
		display: flex;
		padding-top: 0;
	}

	.nav__item {
		margin-left: var(--mb-4);
		margin-bottom: 0;
	}

	.nav__toggle {
		display: none;
	}

	.nav__link {
		color: var(--second-color);
	}

	.down {
		margin-bottom: 1.5rem;
	}
}
</style>
