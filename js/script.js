const { createApp } = Vue

createApp({
  data() {
    return {
      randomEmailsArray: []
    }
  },

  created() {
    this.randomArray(10);
  },

  methods: {

    randomArray(arrayLenght) {
      
        for (let i = 0; i < arrayLenght; i++) {
        
            let randomMail; 

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {

                randomMail = res.data.response;

                if (!this.randomEmailsArray.includes(randomMail)) {
                this.randomEmailsArray.push(randomMail);
                };
        
            });

        };

    }

  }

}).mount('#app')