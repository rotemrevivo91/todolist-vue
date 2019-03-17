<template>
	<v-app id='app'>
		<v-toolbar>
			<v-toolbar-title class="headline text-uppercase">
				<span>Rotem's</span>
				<span class="font-weight-light">todo list</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>

		<v-content>
			<TodoList/>
		</v-content>
	</v-app>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
	name: 'App',
	components: {
		TodoList
	},
	data () {
		return {
			//
		}
	}
}
</script>
