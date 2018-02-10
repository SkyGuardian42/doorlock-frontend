<template>
	<div class="spinner">
		<div class="fill"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spinner {
	margin: 21px auto;
	animation: spin 6s infinite ease;
	width: 80px;
	height: 80px;
	border: 1px solid #000;
	div {
		width: 80px;
		height: 80px;
	}
	.fill {
		transform-origin: 50% 0%;
		animation: fill 6s infinite ease;
		background: #000;
	}
	
}
@keyframes spin {
	0% 		{ transform: rotate(0deg) 	}
	32.6% { transform: rotate(0deg) 	}
	50% 	{ transform: rotate(180deg) }
	83.3% { transform: rotate(180deg) }
	100% 	{ transform: rotate(360deg) }
}

@keyframes fill {
	0% 		{ transform: scaleY(0) }
	33.3% { transform: scaleY(1) }
	50% 	{ transform: scaleY(1) }
	83.3% { transform: scaleY(0) }
	100% 	{ transform: scaleY(0) }
}
</style>
