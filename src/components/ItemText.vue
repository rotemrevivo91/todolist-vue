<template>
	<v-container fluid grid-list-md>
		<v-textarea
			box
			auto-grow
			v-on="listeners"
			label = "Task decription"
		></v-textarea>
	</v-container>
</template>

<script>
	export default{
		computed:{
			listeners(){
				return{
					//an array of all listeners
					...this.$listeners
			};
		}
	}
};
</script>
