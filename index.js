Vue.component('simple' , {
    template:`
        <div class="container">
                <span> Simple Interest Calculator </span>
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
                <button >Reset</button>
                </div>
        </div>`,
    data(){
        return {  
        principal: '',
        rate: '',
        time: ''
        }
    },
    computed: {
        results: function () {
             return (this.principal * this.rate * this.time) /100
        },
        isCompleted() {
            return this.principal || this.rate || this.time
        },
        reset: function() {
            
        }
    }
});

var app = new Vue ({
    el: "#app",
});