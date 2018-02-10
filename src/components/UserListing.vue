 <template>
	<div class="listing">
		<Modal v-if="modalText.length !== 0" :text="modalText" v-on:close="modalText = ''"/>
		<Modal v-if="deleteText.length !== 0" :text="deleteText" v-on:close="action => deleteUser(action)" :actions="[{text:'Nein', return: false}, {text: 'Ja', return: true}]"/>

		<div class="user-info">
				<p class="name">{{ user.name }}</p>
				<p class="mail">{{ user.email }}</p>
			</div>
			<div class="role button" v-if="!user.admin" @click="changeRole">🙂</div>
			<div class="role button" v-if="user.admin" @click="changeRole">👑</div>
			<div class="reset-mail button" @click="resetPassword">♻️</div>
			<div class="delete button" @click="deleteUser(undefined)">🗑️</div>
	</div>
</template>

<script>
const firebase = require('firebase/app');
require('firebase/auth');
import Modal from './Modal'

export default {
	props: ['user'],
	components: {
		Modal
	},
	data() {return {
		modalText: '',
		deleteText: ''
	}},
	methods: {
		changeRole() {
			firebase.auth().currentUser.getIdToken(true)
			.then(token => {
				fetch('/api/user', {
					method: "PATCH",
					body: JSON.stringify({
						token: token,
						uid: this.user.uid,
						admin: !this.user.admin
					}),
					headers: {"Content-Type": "application/json"}
				})
				.then(data => data.json())
				.then(json => {
					this.modalText = json.status;
				})
			})
			.catch(e => this.modalText = e.message)
		},
		resetPassword() {
			firebase.auth().sendPasswordResetEmail(this.user.email)
			.then(()=>{
				this.modalText = `"${this.user.name}" hat eine Email zur Passwortzurücksetzung erhalten`
			})
			.catch(e => this.modalText = e.message)
		},
		deleteUser(accepted) {
			if (typeof accepted === 'undefined') {
				this.deleteText = `Sicher dass du den Nutzer "${this.user.name}" endgültig löschen willst?`;
			} else if(!accepted) {
				this.deleteText = '';
			} else {
				firebase.auth().currentUser.getIdToken(true)
				.then(token => {
					fetch('/api/user', {
						method: "DELETE",
						body: JSON.stringify({
							token: token,
							uid: this.user.uid
						}),
						headers: {"Content-Type": "application/json"}
					})
					.then(data => data.json())
					.then(json => {
						this.modalText = json.status;
						this.deleteText = '';
					})
				})
				.catch(e => this.modalText = e.message)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.listing {
		display: flex;
		flex-direction: row;

		background: #fff;
		
		.user-info {
			flex-grow: 1;
			overflow: auto;
			padding: .2rem;	

			p {
				margin: 0;
				font-size: 2rem;
				white-space: nowrap;
				&:nth-child(2) {
					font-size: 1.6rem;
				}
			}
		}
		.button {
			border-left: 1px solid #000;
			padding: 1rem 3rem;
		}
	}
	@media (max-width: 600px) {
		.listing .button {
			padding: 1rem 2rem;
		}
	}
</style>
