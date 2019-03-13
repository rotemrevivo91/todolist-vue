<template>
    <v-flex md12 lg6>
      <v-time-picker
        v-model = "timeStep"
        :allowed-minutes = "allowedStep"
        class = "mt-3"
        format = "24hr"
        full-width
        max-height = 100
        color = "black"
        :value="value"
        v-on="listeners"
      ></v-time-picker>
    </v-flex>
</template>

<script>
  let time = new Date().toISOString().substr(11,5)

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
    },
    data () {
      return {
        timeStep: time
      }
    },
    methods: {
      allowedStep: m => m % 5 === 0
    }
  }
</script>