<template>
	<section>
		<Modal v-if="modalText !== ''" :text="modalText" v-on:close="modalText = ''" />

		<form v-on:submit.prevent="createUser">
			<input v-model="newUser.name" type="text" placeholder="name" required tabindex="0">
			<input v-model="newUser.email" type="email" placeholder="email" tabindex="0" required>
			<div class="split">
				<input type="submit" @click="newUser.admin = true" value="+ 👑" class="button">
				<input type="submit" @click="newUser.admin = false" value="+ 🙂" class="button">

			</div>
		</form>

		<div class="user-search">
			<input disabled type="text" placeholder="suche" tabindex="0">
			<div disabled class="button" tabindex="0">🔎</div>
		</div>
		<Spinner v-if="users.length === 0"/>
		<UserListing v-for="user in users" :user="user" :key="user.uid"/>	
	</section>
</template>

<script>
const firebase = require('firebase/app')
require('firebase/auth')

import UserListing from './UserListing'
import Modal from './Modal'
import Spinner from './Spinner'
export default {
	components: {
		UserListing,
		Modal,
		Spinner
	},
	props: ['storedUsers'],
	created() {
		this.users = this.storedUsers;

		firebase.auth().currentUser.getIdToken(true)
		.then(token => {
			fetch('/api/users', {
				method: "POST",
				body: JSON.stringify({token: token}),
				headers: {"Content-Type": "application/json"}
			})
			.then(data => data.json())
			.then(json => {
				this.$emit('update:storedUsers', json);
				this.users = json;
			})
		})
	},
	data(){ return {
		users: [],
		modalText: '',
		newUser: {
			email: '',
			name: '',
			admin: false
		},
		mailRegex: ''
	}},
	methods: {
		createUser() {
			let testRegex = /^(([A-Z]|[\u00C0-\u00DF])([a-z]|[\u00E0-\u00FF]|\u00DF)+ ?){2,}$/g;
			
			if(!testRegex.test(this.newUser.name)) {
				this.modalText = `Name im falschen Format`
				return;
			}
			firebase.auth().currentUser.getIdToken(true)
			.then(token => {
				fetch('/api/user', {
					method: "PUT",
					body: JSON.stringify({
						token: token,
						name: this.newUser.name,
						email: this.newUser.email,
						admin: this.newUser.admin
					}),
					headers: {"Content-Type": "application/json"}
				})
				.then(data => data.json())
				.then(json => {
					this.newUser.email = '';
					this.newUser.name = '';
					this.modalText = 'Nutzer erstellt';
				})
				.catch(e => this.modalText = 'Irgendwas ist mit der Anfrage falsch gelaufen')

			})

		}
	}

}
</script>

<style lang="scss" scoped>
	section {
		background: #fff;

		> div:not(.modal), form > input{
			border-bottom: 1px solid #000;
		}
	}
	.user-search {
		display: flex;
		grid-template-columns: 4fr 1fr 1fr 1fr;

		input {
			flex-grow: 1;
		}
		.button {
			border-left: 1px solid black;
			padding-left: 5rem;
			padding-right: 5rem;
		}

	}
	.split {
		display: flex;
		border-bottom: 1px solid black;
		input:not(:last-child) {
			border-right: 1px solid black;
		}
	}
</style>
