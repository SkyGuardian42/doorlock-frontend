<template>
	<section>
		<div v-for="logDate in logs" :key="logDate.date">
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
	</section>
</template>

<script>
export default {
	props: ['token'],
	data() {return {
		rawLogs: [],
		rawLogsMock: [{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T15:23:57.277Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T15:20:03.807Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T15:19:11.337Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T01:33:38.437Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T01:33:37.181Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T01:33:15.140Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T01:32:59.934Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T01:32:45.189Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T00:06:35.556Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-03T00:06:34.512Z"},{"user":"me@malts.me","action":"Tür geöffnet","createdAt":"2018-02-01T23:53:25.146Z"}]
	}},
	created() {
		fetch('/api/logs', {
      	method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					 token: this.token,
					 offset: 0
				})
			})
		.then(res => res.json())
		.then(json => {
			this.rawLogs = json
		})
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
		}
	}
}
</script>

<style lang="scss" scoped>
	section {
		background: #fff;
		// text-align: center;
		> div {
			border-bottom: 1px solid #000;
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
