<template>
	<section>
		<Modal v-if="modalText" :text="modalText" v-on:close="modalText = ''"/>
		<div v-for="logDate in logs" :key="logDate.date" class="log">
			<h1> {{logDate.date}} </h1>
			<div class="entries">

				<div class="list-down">
					<p v-for="log in logDate.logs" :key="log.createdAt">[{{ log.time }}</p>
				</div>

				<div class="list-down">
					<p v-for="log in logDate.logs" :key="log.createdAt">] {{ log.user }} - {{ log.action }}</p>
				</div>
			</div>
		</div>
		<Spinner v-if="rawLogs.length === 0"/>	
		<div class="button" @click="loadData" v-if="logsAvailable">ältere Einträge laden</div>
	</section>
</template>

<script>
const firebase = require('firebase/app')
require('firebase/auth')

import Modal from './Modal';
import Spinner from './Spinner';
export default {
	components: {
		Modal,
		Spinner
	},
	props: ['storedLogs'],
	data() {return {
		rawLogs: [],
		rawLogsMock: [{"createdAt":"2018-02-06T07:51:21.607Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T23:50:35.759Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T23:47:18.812Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T22:57:15.488Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T21:43:42.834Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:46:07.396Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:46:07.020Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:46:06.715Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:56.691Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:56.263Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:55.857Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:45:55.491Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T18:34:26.408Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:47:23.344Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:47:17.873Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:43:18.773Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:42:49.411Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:42:36.212Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:25:01.914Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:15:48.063Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:15:25.979Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:06:16.066Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:04:44.483Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:03:21.597Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:02:32.886Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T17:02:20.448Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:53:23.544Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:53:17.776Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:53:14.791Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:52:49.670Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:52:38.944Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:52:33.931Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:49:16.925Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:49:11.927Z","user":"me@malts.me","action":"Tür geöffnet"},{"createdAt":"2018-02-05T16:48:58.746Z","user":"me@malts.me","action":"Tür geöffnet"}],
		modalText: '',
		logsAvailable: false,
		initialLoad: true
	}},
	methods: {
		loadData(){	
			firebase.auth().currentUser.getIdToken(true)
			.then(token => {
				fetch('/api/logs', {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						token: token,
						offset: (this.initialLoad? undefined : this.offsetDate)
					})
				})
				.then(res => {
					if(res.status !== 200)
							this.modalText = res.status + ': ' + res.statusText;
					return res.json();
				})
				.then(json => {
					if(this.initialLoad) {
						this.$emit('update:storedLogs', json);
						this.rawLogs = json;
						this.initialLoad = false;
					}
					else
						this.rawLogs.push.apply(this.rawLogs, json)

					if(json.length < 35)
						this.logsAvailable = false;
					else
						this.logsAvailable = true;
				})
			})
		}
	},
	created() {
		this.rawLogs = this.storedLogs;
		this.loadData();
	},
	computed: {
		logs() {
			let sortedLogs = []
			const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
			const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
	
			this.rawLogs.forEach(log => {
				let date = new Date(log.createdAt)
				let dateString = `${date.getDate()<10?'0':''}${date.getDate()}.${date.getMonth()<10?'0':''}${date.getMonth()}.${date.getFullYear()}`
				let found = false
				log.time = `${date.getHours() < 10 ? '0': ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`

				sortedLogs.forEach(dateEntry => {
					if(dateEntry.date === dateString) {
						dateEntry.logs.push(log)
						found = true
					}
				})
				
				if(!found) {
					sortedLogs.push({
						date: dateString,
						logs: [log]
					})
				}
			})
			return sortedLogs
		},
		offsetDate() {
			if (this.rawLogs.length > 0)
				return this.rawLogs[this.rawLogs.length -1].createdAt
			else
				return null
	
		}
	}
}
</script>

<style lang="scss" scoped>
	section {
		overflow-y: auto;
		background: #fff;
		.log {
			border-bottom: 1px solid #000;
			padding-bottom: .5rem;
			overflow-x: auto;
			white-space: nowrap;

			.entries {
				display: flex;
				
			}
			.list-down {
				display: flex;
				flex-direction: column;
			}
		}
	}
	h1 {
		margin: 0;
		font-size: 2.4rem;
	}
	p {
		font-size: 1.8rem;
		margin: 0 .1rem;
		// font-family: 'Roboto Mono';
		font-weight: 500
	}
	.button {
		padding: 2rem;
		border-bottom: 1px solid #000;
	}
	@media (min-width: 600px) {
		.entries {
			justify-content: center;
		}
		h1 {
			text-align: center;
		}
		p {
			margin: .1rem .1rem;
		}
	}
	
</style>
