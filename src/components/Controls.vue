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
	props: ['token'],
	methods: {
		logout() {
			firebase.auth().signOut().then(() => this.$emit('navigation', 'Login'))
		},
		open() {
			fetch('/api/open', {
      	method: "POST",
     		body: JSON.stringify({token: this.token}),
      	headers: {"Content-Type": "application/json"}
			})
			

		}
	}
}
</script>

<style lang="scss" scoped>
	section {
		// height: 100%;
		background: #fff;
		
		display: flex;
		flex-direction: column;
		> * {
			flex-grow: 1;
		}
		> *:not(:last-child) {
			border-bottom: 1px solid #000;
		}
	}

	@media (orientation: landscape) {
		section {
			flex-direction: row;

			> *:not(:last-child) {
				border-right: 1px solid #000;
				border-bottom: none;
			}
		}
	}
</style>
