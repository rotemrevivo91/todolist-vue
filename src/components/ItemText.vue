<template>
  <v-container fluid grid-list-md>
    <v-textarea
      box
      auto-grow
      :value="value"
      v-on="listeners"
      label = "Task decription"
    ></v-textarea>
  </v-container>
</template>

<script>
	export default{
		props: {
      value: {
        type: String,
        default: ""
      }
    },
    computed:{
      listeners(){
        return{
        //an array of all listeners
        ...this.$listeners,
        x : () => this.$emit('input',this.value)
      };
    }
  }
};
</script>