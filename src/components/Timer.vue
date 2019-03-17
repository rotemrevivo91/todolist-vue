<template>
	<p id='timer'> {{ hours }} : {{ minutes }} : {{ seconds }}</p>
</template>

<script>
	export default{
		name: 'timer',
		data() {
			return{
				hours: 0,
				minutes: 1,
				seconds: 0,
				active: true
			}
		},
		mounted: function(){
			this.tick()
		},
		methods:{
			tick: function(){
					setInterval(()=>{
					if(this.active){
						if(this.seconds == 0){
							if(this.minutes > 0){
								this.seconds = 60;
								this.minutes--;
							}
							else{
								if(this.hours > 0){
									this.minutes = 59;
									this.hours--;
									this.seconds = 60;
								}
								else{
									this.active = false;
									this.removeevent()
								}
							}
						}
						this.seconds--;
					}
				}, 1000);
			},
			removeevent(){
				this.$emit('removeevent',true)
			}
		}
	}
</script>
