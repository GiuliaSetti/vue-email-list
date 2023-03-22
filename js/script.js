// console.log("prova sa sa")


const { createApp } = Vue

createApp({
  data() {
    return {
      title: "Random Email Generator",
      emails: [],
    }
  },


  created(){

    for(let i = 0; i < 10; i++){
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then((res) => {

                this.emails.push(res.data.response)

            // test
                // console.log(this.emails.length)
            });
        }
  }
 


}).mount('#app')