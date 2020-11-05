<template>
	<header class="l-header">
		<nav class="nav bd-grid">
			<div>
				<router-link to="/" class="nav_logo"><h2>Patricia</h2></router-link>
			</div>
			<div class="nav__menu" id="nav-menu">
				<ul class="nav__list">
					<li class="nav__item">
						<router-link to="/login" class="nav__link">Login</router-link>
					</li>
					<li class="nav__item">
						<router-link to="/register" class="nav__link">Register</router-link>
					</li>
				</ul>
			</div>
			<div class="nav__toggle" id="nav-toggle">
				<i class="bx bx-menu"></i>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Nav',
};
</script>

