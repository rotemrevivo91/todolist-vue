<template>
  <v-container
    fluid>
    <v-layout align-center>
      <v-flex>
        <v-text-field
          :value = 'value'
          v-on = 'listeners'
          label = 'New task' >
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
