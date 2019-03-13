<template>
	<v-flex>
		<v-card>
			<v-card-title primary-title>
				<div> 
					{{ todo.text }}
					<button @click="$emit('remove',todo.id)">X</button>
					<Timer
						@removeevent="$emit('remove',todo.id)"
					/>
				</div>
			</v-card-title>
		</v-card>
	</v-flex>	
</template>

<script>
	import Timer from './Timer.vue'
	export default{
		components: {
			Timer
		},
		props: {
			todo: {
				type: Object,
				required: true
			}
		}
	};
</script>