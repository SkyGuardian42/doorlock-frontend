<template>
	<section>
		<header class="button">HGO 🚪🔒</header>
		<input type="email" v-model="email">
		<input type="password" v-model="password">
		<div type="submit" class="button" @click="login">Anmelden</div>
	</section>

</template>

<script>
	const firebase = require('firebase/app')
	require('firebase/auth')
	export default {
		data() { return {
			email: "",
			password: ""
		}},
		methods: {
			login() {
				this.$emit('navigation', 'Controls')
			}
		}
		
	}
</script>

<style lang="scss">
	section {
		height: 100%;
		display: flex;
		flex-direction: column;

	

		> * {
			flex-grow: 1;
		}
		> *:not(:last-child) {
			border-bottom: 1px solid #000;
		}
	}
	input {
		font-family: 'Poppins', sans-serif;
		padding: 12px;
		font-size: 2.2rem;
		text-align: center;
		background: #fff;
		border: none;
	}
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		
		background: #fff;
		text-align: center;
		padding: 12px;
		vertical-align: center;
		cursor: pointer;
		
		&:hover {
				background: #f5f5f5;	
		}
		&:active {
			background: #e3e3e3;	
		}
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;	
	}
</style>
