 <template>
	<div class="listing">
		<div class="user-info">
				<p class="name">{{ user.name }}</p>
				<p class="mail">{{ user.email }}</p>
			</div>
			<div class="role button" v-if="!user.admin" @click="changeRole">🙂</div>
			<div class="role button" v-if="user.admin" @click="changeRole">👑</div>
			<div class="reset-mail button" @click="resetPassword">♻️</div>
			<div class="delete button" @click="deleteUser">🗑️</div>
	</div>
</template>

<script>
export default {
	props: ['user'],
	methods: {
		changeRole() {
			console.log('change users role to ' + (this.user.admin? 'user: ' : 'admin: ') + this.user.uid)
		},
		resetPassword() {
			console.log('reset password of user: ' + this.user.email)
		},
		deleteUser() {
			console.log('delete user: ' + this.user.uid)
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
