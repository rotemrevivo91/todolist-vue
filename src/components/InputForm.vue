<template>
	<v-layout>
		<v-flex xs6>
				<InputItem
					v-model='newitem'
					@change='change_item'
					placeholder="Add item"
				/>
				<ItemText
					v-model='text'
					@change='change_desc'
					placeholder="Item description"
				/>
				<ItemDate 
					v-model='mydate'
					@change='change_date'
				/>
		</v-flex>
		<ItemTime 
			v-model='mytime'
			@change='change_time'
		/>
	</v-layout>
</template>

<script>
	import InputItem from "./InputItem.vue"
	import ItemText from "./ItemText.vue"
	import ItemDate from "./ItemDate.vue"
	import ItemTime from "./ItemTime.vue"

	export default{
		components:{
			InputItem, ItemText, ItemDate, ItemTime
		},
		data(){
			return{
				text: '',
				newitem: '',
				mydate: '',
				mytime: ''
			}
		},
		methods:{
			change_desc(){
				this.$store.commit('change_desc',this.text)
			},
			change_item(){
				this.$store.commit('change_item',this.newitem)
			},
			change_date(){
				this.$store.commit('change_date',this.mydate)
			},
			change_time(){
				this.$store.commit('change_time',this.mytime)
			}
		}
	}
</script>
