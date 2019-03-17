<template>
	<v-container
		fluid>
		<v-layout align-center>
			<v-flex>
				<v-text-field
					v-on="listeners"
					label = 'New task' >
				</v-text-field>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	computed:{
		listeners(){
			return{
				//an array of all listeners
				...this.$listeners
			}
		}
	}
}
</script>
