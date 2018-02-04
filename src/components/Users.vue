<template>
	<section>
		<input type="text" placeholder="name">
		<input type="email" placeholder="email">
		<div class="button">hinzufügen</div>

		<div class="user-search">
			<input type="text" placeholder="suche">
			<div class="button">🔎</div>
		</div>

		 <UserListing v-for="user in users" :user="user" :key="user.uid"/>	
	</section>
</template>

<script>
import UserListing from './UserListing'
export default {
	components: {
		UserListing
	},
	data(){ return {
		users: [
			{
				name: "Malte Janßen",
				email: "me@malts.me",
				uid: "bNRqk6WFRz6g",
				admin: true
			},
			{
				name: "Lennard Kleyman",
				email: "mail@lennard.tech",
				uid: "ZHrkTlvMMf17",
				admin: true
			},
			{
				name: "Kerstin Rolfes",
				email: "rolfes@hgo-ol.de",
				uid: "lEbfITVmRAmz",
				admin: false
			}
		]
	}}
}
</script>

<style lang="scss" scoped>
	section {
		background: #fff;

		> *{
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
</style>
