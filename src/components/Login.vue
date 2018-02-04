<template>
	<section>
		<header class="button">HGO 🚪🔒</header>
		<input type="email" v-model="email" placeholder="email">
		<input type="password" v-model="password" placeholder="password" @keyup.enter="login">
		<div type="submit" class="button" @click="login" v-if="!loggedIn">Anmelden</div>
	</section>

</template>

<script>
	const firebase = require('firebase/app')
	require('firebase/auth')

	firebase.initializeApp({
    apiKey: "AIzaSyAuhn5rTvl91iGOugkxfdG_HvHWDiAwlUs",
    authDomain: "hgo-doorlock.firebaseapp.com",
    databaseURL: "https://hgo-doorlock.firebaseio.com",
    projectId: "hgo-doorlock",
    storageBucket: "hgo-doorlock.appspot.com",
    messagingSenderId: "308945458314"
  });
	

	export default {
		props: ['token'],
		data() { return {
			email: "",
			password: ""
		}},
		methods: {
			login() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password)
				.then(user => {
					firebase.auth().currentUser.getIdToken(true)
						.then(idToken => {
							this.$emit('token', idToken)
							this.$emit('navigation', 'Controls')
						})
						.catch(e => console.log(e))
					
				})
				.catch(e => console.log(e))
			}
		},
		computed: {
			loggedIn() {
				firebase.auth().onAuthStateChanged(user => {
					if(user) {
						firebase.auth().currentUser.getIdToken(true)
						.then(idToken => {
							this.$emit('token', idToken)
							this.$emit('navigation', 'Controls')	
						})
						return true;
					}
				})
			}
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
