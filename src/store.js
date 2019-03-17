import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		newitem : '',
		itemdes : '',
		mydate : '',
		mytime : ''
	},
	mutations: {
		change_item(state,newitem){
			state.newitem = newitem
		},
		change_desc(state,itemdes){
			state.itemdes = itemdes
		},
		change_date(state,mydate){
			state.mydate = mydate
		},
		change_time(state,mytime){
			state.mytime = mytime
		}
	},
	actions: {

	},
	getters: {
		newitem: state => state.newitem,
		itemdes: state => state.itemdes,
		mydate: state => state.mydate,
		mytime: state => state.mytime
	}
})
