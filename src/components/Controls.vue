<template>
	<section>
		<div class="button" @click="open">öffnen</div>
		<div class="button" @click="logout">abmelden</div>
	</section>
</template>

<script>
const firebase = require('firebase/app')
require('firebase/auth')
export default {
	methods: {
		logout() {
			console.log('logout')
		},
		open() {
			console.log('open')

		}
	}
}
</script>

<style>
	section {
		height: 100%;
		background: #fff;
		padding-bottom: 66px;
		
		display: flex;
		flex-direction: column;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		
		background: #fff;
		text-align: center;
	}
</style>
