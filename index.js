Vue.component('simple' , {
    template:`
        <div class="container">
                <span> Simple Interest Calculator </span>
                 <br>
                 <br>
                 <br>
                 <input v-model="principal" type="tel" placeholder="Principal"> 
                 <br>
            
                <br>
                <input v-model="time"type="tel" placeholder="Time">
                <br>
    
                <br>
                <input v-model="rate" type="tel" placeholder="Rate">
                <br>
                <p v-show="!this.results == 0"> Your simple interest is ₦{{ results }} </p>
                <div>
                <button v-show="principal || rate || time" v-on:click="reset">Reset</button>
                </div>
        </div>`,

    data(){
        return {  
        principal: '',
        rate: '',
        time: '',
        } 
    },

    methods: {
         reset() {
            this.principal = null,
            this.rate = null;
            this.time = null;
        }
    },

    computed: {
        results: function () {
             return (this.principal * this.rate * this.time) /100
        },
    }
});

var app = new Vue ({
    el: "#app",
});
