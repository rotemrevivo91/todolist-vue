<template>
	<div>
		<InputForm
			v-model="todolist"
			placeholder="Add item"
		/>
		<v-btn @click="addItem">Send</v-btn>
		<v-container grid-list-xl text-xs-center>
			<v-layout>
				<v-flex>
					<ul v-if="todolist.length">
						<TodoItem
							v-for="todo in todolist"
							:key="todo.id"
							:todo="todo"
							@remove="removeItem"
						/>
					</ul>
					<p v-else>
						<span> List is empty. </span>
					</p>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	import InputForm from "./InputForm.vue"
	import TodoItem from "./TodoItem.vue"

	let nid=1

	export default{
		components: {
			InputForm, TodoItem
		},
		data() {
			return{
				newitem: [],
				todolist: []
			}
		},
		methods: {
			addItem(){
				this.newitem.push(nid++)
				this.todolist.push(this.newitem)
				//remove input's text
				this.newitem = []
			},
			//returns a new list with all the elements which are not equal to rid
			removeItem(rid){
				this.todolist = this.todolist.filter(todo => {return todo.id !== rid})
			}
		}

	}
</script>


