<template>
	<section>
		<Modal v-if="modalText !== ''" :text="modalText" v-on:close="modalText = ''"/>
		<form v-on:submit.prevent="submitSignup">
			<input type="password" placeholder="Passwort" v-model="password[0]" required>
			<input type="password" placeholder="Passwort wiederholen" v-model="password[1]" required>
			<input class="button" type="submit" value="Registrierung abschließen">
		</form>
	</section>
</template>

<script>
import Modal from './Modal'
export default {
	components: {
		Modal
	},
	props: ['token'],
	data() {return {
		password: ['',''],
		modalText: ''
	}},
	methods: {
		submitSignup() {
			if(this.password[0] !== this.password[1]) {
				this.modalText = 'Passwörter unterschiedlich'
			} else {
				fetch('/api/signup', {
					method: "POST",
					body: JSON.stringify({
						signupToken: this.token,
						password: this.password[0]
					}),
					headers: {"Content-Type": "application/json"}
				})
				.then(data => data.json())
				.then(json => {
					if(json.error)
						this.modalText = json.error
					else {
						this.$emit('navigation', 'Login');
						window.location.href = '/'
					}
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	section {
		height: 100%;
		background: #fff;
	}
	form {
		display: flex;
		flex-direction: column;
		height: 100%;

		input {
			flex-grow: 1;
		}

		> input:not(:last-child) {
			border-bottom: 1px solid #000;
		}
	}
</style>
