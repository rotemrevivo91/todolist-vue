<template>
	<v-layout>
		<v-flex xs6>
				<InputItem
					v-model="newitem"
					placeholder="Add item"
				/>
				<ItemText
					v-model="itemdes"
					placeholder="Item description"
				/>
				<ItemDate v-model="mydate"/>
		</v-flex>
		<ItemTime v-model="mytime"/>
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
				newitem : '',
				itemdes : '',
				mydate : '',
				mytime : '',
				infolist : []
			}
		},
		methods: {
			sendItem(){
				this.infolist.push(this.newitem)
				this.infolist.push(this.itemdes)
				this.infolist.push(this.mydate)
				this.infolist.push(this.mytime)
				this.$emit('input',this.infolist)
				this.infolist = []
			}
		}
	}
</script>