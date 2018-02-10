<template>
	<section>
		<Modal v-if="modalText !== ''" :text="modalText" v-on:close="modalText = ''"/>

		<header class="button">HGO 🚪🔒</header>
		<input type="email" v-model="email" placeholder="email">
		<input type="password" v-model="password" placeholder="password" @keyup.enter="login">
		<div type="submit" class="button" @click="login">Anmelden</div>
	</section>

</template>

<script>
	const firebase = require('firebase/app')
	require('firebase/auth')
	import Modal from './Modal'

	firebase.initializeApp({
    apiKey: "AIzaSyAuhn5rTvl91iGOugkxfdG_HvHWDiAwlUs",
    authDomain: "hgo-doorlock.firebaseapp.com",
    databaseURL: "https://hgo-doorlock.firebaseio.com",
    projectId: "hgo-doorlock",
    storageBucket: "hgo-doorlock.appspot.com",
    messagingSenderId: "308945458314"
  });
	
	export default {
		components: {
			Modal
		},
		data() { return {
			email: "",
			password: "",
			modalText: '',
		}},
		methods: {
			login() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password)
				.catch(e => this.modalText = e.message)
			},
			b64DecodeUnicode(str) {
				return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
						return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
				}).join(''));
			}
		},
		created() {
			firebase.auth().onAuthStateChanged(user => {
				if(user) {
					// Save user data
					let currUser = {
						displayName: user.displayName,
						email: user.email,
						admin: false
					}

					firebase.auth().currentUser.getIdToken()
					.then((idToken) => {
						// Parse the ID token
						const payload = JSON.parse(this.b64DecodeUnicode(idToken.split('.')[1]));


						// Confirm the user is an Admin
						if (!!payload['admin'])
							currUser.admin = true;

						// Send data off to parent component
						this.$emit('user', currUser);
						// And close login screen
						this.$emit('navigation', 'Controls');

					})
					.catch((error) => {
						this.modalText = error.message;
					})
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
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
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		
		background: #fff;
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
