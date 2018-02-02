<template>
  <div id="app">
    <Navigation v-if="currScreen !== 'Login'" v-on:navigation="changeScreen"/>
		<Login v-if="currScreen === 'Login'" v-on:navigation="changeScreen"/>
		<Controls v-if="currScreen === 'Controls'"/>
		<Logs v-if="currScreen === 'Logs'"/>
		<Users v-if="currScreen === 'Users'"/>
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

	body {
		font-family: 'Poppins', sans-serif;
		font-size: 2.2rem;
		font-weight: 600;
		background: #000;
		
		margin: 0;

		color: #000;
	}

	#app {
		height: 100vh;
		padding: 1px;
	}

	@media (max-width: 600px) {
	html {
		font-size: 8px;
	}
	body {
		// padding-bottom: 45px;
	}
}

</style>
