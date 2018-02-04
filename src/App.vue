<template>
  <div id="app">
    <Navigation v-if="currScreen !== 'Login'" v-on:navigation="changeScreen"/>
		<Login v-if="currScreen === 'Login'" v-on:navigation="changeScreen"  v-on:token="token => user.token = token"/>
		<Controls class="fs" v-if="currScreen === 'Controls'" v-on:navigation="changeScreen" :token="user.token"/>
		<Logs class="fs" v-if="currScreen === 'Logs'" :token="user.token"/>
		<Users class="fs" v-if="currScreen === 'Users'"/>

		<div class="spacer" v-if="currScreen !== 'Login'"></div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Controls from './components/Controls'
import Logs from './components/Logs'
import Users from './components/Users'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
		Navigation,
		Controls,
		Logs,
		Users,
		Login
	},
	data() {
    return {
			user: {
				token: ""
			},
			currScreen: "Login"
		}
	},
	methods: {
		changeScreen(screen) {
			console.log('changing screen to ' + screen);
			this.currScreen = screen;
		}
	}
}
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
	}

	[v-cloak] {
		display: none;
	}

	body {
		font-family: 'Poppins', sans-serif;
		font-size: 2.2rem;
		font-weight: 600;
		background: #000;
		margin: 0;

		color: #000;
	}

	#app {
		padding: 1px;
		height: 100vh;
	}

	input {
		font-family: 'Poppins', sans-serif;
		width: 100%;
		padding: 1.2rem;
		font-size: 2.2rem;
		text-align: center;
		background: #fff;
		border: none;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.2rem;

		padding: 1.2rem;
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
	.fs {
		min-height: calc(100vh - 65px);
	}
	@media (max-width: 600px) {
		html {
			font-size: 8px;
		}
		.fs {
			min-height: calc(100vh - 54px);
		}
}

</style>
