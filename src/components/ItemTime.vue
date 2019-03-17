<template>
		<v-flex md12 lg6>
			<v-time-picker
        v-model="time"
				:allowed-minutes = "allowedStep"
				class = "mt-3"
				format = "24hr"
				full-width
				max-height = 100
				color = "black"
				v-on="listeners"
			></v-time-picker>
		</v-flex>
</template>

<script>
	export default {
		computed:{
				listeners(){
						return{
							//an array of all listeners
							...this.$listeners,
							x : () => this.$emit('input',this.value)
						};
				}
		},
    data(){
      return{
        time : new Date().toISOString().substr(11,5)
      }
    },
		methods: {
			allowedStep: m => m % 5 === 0
		}
	}
</script>
