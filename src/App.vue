<template>
  <div id="app">
    <Navigation v-if="currScreen !== 'Login' && currScreen !== 'Signup' && user.admin" v-on:navigation="changeScreen"/>
		<Signup v-if="currScreen === 'Signup'" :token="signupToken" v-on:navigation="changeScreen"/>
		<Login v-if="currScreen === 'Login'" v-on:navigation="changeScreen"  v-on:user="userInfo => user = userInfo"/>
		<Controls class="fs" v-if="currScreen === 'Controls'" v-bind:class="{fullscreen: !user.admin}" v-on:navigation="changeScreen" :name="user.displayName"/>
		<Logs class="fs" v-if="currScreen === 'Logs'" :storedLogs.sync="logs"/>
		<Users class="fs" v-if="currScreen === 'Users'" :storedUsers.sync="users"/>

		<div class="spacer" v-if="currScreen !== 'Login'"></div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Controls from './components/Controls'
import Logs from './components/Logs'
import Users from './components/Users'
import Login from './components/Login'
import Signup from './components/Signup'


export default {
  name: 'App',
  components: {
		Navigation,
		Controls,
		Logs,
		Users,
		Login,
		Signup
	},
	data() {
    return {
			user: {},
			// users: [{"name":"Lennard Kleymann","admin":true,"uid":"3jYTRmg3ZSPPU3qN1vceMkA9pR32","email":"admin@lennard.tech"},{"name":"Definitv Keinadmin","admin":false,"uid":"OrSP7oF4rwYKIlbnjKXdVaDAfIB3","email":"notadmin@malts.me"},{"name":"Malte Janßen","admin":true,"uid":"QbAYHSoFN1bdYVGh1s43qJyz4n32","email":"skyguardian42@gmail.com"}],
			// logs: [{"createdAt":"2018-02-06T07:51:21.607Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T23:50:35.759Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T23:47:18.812Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T22:57:15.488Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T21:43:42.834Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:46:07.396Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:46:07.020Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:46:06.715Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:56.691Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:56.263Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:55.857Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:55.491Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:34:26.408Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:47:23.344Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:47:17.873Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:43:18.773Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:42:49.411Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:42:36.212Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:25:01.914Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:15:48.063Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:15:25.979Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:06:16.066Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:04:44.483Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:03:21.597Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:02:32.886Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:02:20.448Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:53:23.544Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:53:17.776Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:53:14.791Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:52:49.670Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:52:38.944Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:52:33.931Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:49:16.925Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:49:11.927Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:48:58.746Z","user":"me@malts.me","action":"Tür geöffnet"}],
			users: [],
			logs: [],
			currScreen: "Login",
			signupToken: ""
		}
	},
	created() {
		let signupToken = window.location.search.split('?signup=')
		if(signupToken.length === 2) {
			this.signupToken = signupToken[1] 
			this.currScreen = 'Signup'
		}
	},
	methods: {
		changeScreen(screen) {
			if(typeof screen === 'undefined')
				screen = localStorage.getItem('lastScreen') || 'Login';

			localStorage.setItem('lastScreen', screen)
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
		min-height: calc(100vh - 2px);
		padding-bottom: 65px;
	}
	@media (max-width: 600px) {
		html {
			font-size: 8px;
		}
		.fs {
			padding-bottom: 54px;
		}
}
.fullscreen {
	padding-bottom: 0;
}
</style>
