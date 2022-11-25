
  const { createApp } = Vue

  createApp({
    data() {
      return {
        name: 'Valdo',
        input_name: ''
      }
    },
    methods:{
        submitform(e){
            e.preventDefault();
            console.log(this.input_name);

            this.name = this.input_name;
        }
      }
  }).mount('#app')