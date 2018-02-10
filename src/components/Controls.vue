<template>
	<section>
		<Modal v-if="modalText !== '' || modalHtml !==''" :text="modalText" :html="modalHtml" v-on:close="modalText = ''; modalHtml = ''"/>
		<div class="button half" @click="modalHtml = '©2018 Malte&nbspJanßen'">Hallo {{ name.split(' ')[0] }}!</div>
		<div class="controls">
			<div class="button" @click="open">öffnen</div>
			<div class="button" @click="logout">abmelden</div>
		</div>
	</section>
</template>

<script>
const firebase = require('firebase/app')
require('firebase/auth')
import Modal from './Modal'
export default {
	props: ['token', 'name'],
	components: {
		Modal
	},
	data() {return{
		modalText: "",
		modalHtml: ""
	}},
	methods: {
		logout() {
			firebase.auth().signOut().then(() => this.$emit('navigation', 'Login'))
		},
		open() {
			firebase.auth().currentUser.getIdToken(true)
			.then(idToken => {
				fetch('/api/open', {
					method: "POST",
					body: JSON.stringify({token: idToken}),
					headers: {"Content-Type": "application/json"}
				})
				.then(res => {
					if(res.status !== 200)
						this.modalText = res.status + ': ' + res.statusText
					return res.json()
				})
				.then(json => {
					if(json.error)
						this.modalText = json.error
				})
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
		.button:not(:last-child) {
			border-bottom: 1px solid #000;
		}
	}
	.controls {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex-grow: 1;
		> .button {
			flex-grow: 1;
		}
	}
	.half {
		padding: 2rem 0;
	}

	@media (orientation: landscape) {
		.controls {
			flex-direction: row;
			.button {
				width: 50%;
			}
			> .button:not(:last-child) {
				border-right: 1px solid #000;
				border-bottom: none;
			}
		}
	}
</style>
