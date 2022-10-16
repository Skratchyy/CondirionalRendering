const app = Vue.createApp({
    data(){
        return {
            enteredTask: '',
            tasks: [],
            show: true
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTask);
            console.log(this.enteredTask);
            console.log(this.tasks)
        }
    }
});

app.mount("#assignment");