<template>
	<v-menu
		ref="menu1"
		v-model="menu1"
		:close-on-content-click="true"
		:nudge-right="40"
		lazy
		transition="scale-transition"
		offset-y
		full-width
		max-width="290px"
		min-width="290px">
		<template v-slot:activator="{ on }">
			<v-text-field
				v-model="date"
				prepend-icon="event"
				readonly
				v-on="on">
			</v-text-field>
		</template>
		<v-date-picker v-model="date" @input="menu2 = false" :value="value" v-on="listeners"></v-date-picker>
	</v-menu>
</template>

<script>
	export default{
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
				date: new Date().toISOString().substr(0, 10),
				menu1: false,
				menu2: false,
				value: ""
		}
	}
}
</script>
