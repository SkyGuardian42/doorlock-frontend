<template>
	<div class="modal">
	<div class="content">
		<p>{{text}}</p>
		<div v-html="html"></div>
		</div> 
	<div class="split">
		<div class="button" v-for="action in actions" @click="$emit('close', action.return)"  :key="action.name">{{action.text}}</div>
	</div>
	<div class="button" v-if="typeof actions === 'undefined'" @click="$emit('close')">OK</div>
	
	</div>
</template>

<script>
export default {
	props: ['text', 'html', 'actions']
}
</script>

<style lang="scss" scoped>
	.modal {
		position: fixed;
		background: #f1f1f1;
		border: 1px solid black;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
	}
	.button {
		border-top: 1px solid black;
		padding-right: 2rem;
	}
	.content {
		display: flex;
		flex-grow: 1;
		max-width: 100vh;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		
		text-align: center;
	}
	.split {
		display: flex;
		.button {
			flex-grow: 1;
		}
		.button:not(:last-child) {
			border-right: 1px solid black;
		}
	}
</style>
