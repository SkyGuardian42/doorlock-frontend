<template>
	<nav>
		<div class="controls" @click="navigation('Controls')">🚪</div>
		<div class="logs" @click="navigation('Logs')">📖</div>
		<div class="users" @click="navigation('Users')">👤</div>
	</nav>
</template>

<script>
export default {
	methods: {
		navigation(screen) {
			this.$emit('navigation', screen);
		}
	}
}
</script>

<style lang="scss" scoped>
nav {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: #000;
	display: flex;
	user-select: none;
	> * {
		flex-grow: 1;
		text-align: center;
		font-size: 3.2rem;
		
		padding: 8px;
		margin: 1px;
		margin-right: 0;
		
		background: #fff;
		cursor: pointer;
		
		&:hover {
			background: #f5f5f5;	
		}
		
		&:active {
			background: #e3e3e3;	
		}
		&:last-child {
			margin-right: 1px;
		}
	}
}
</style>
