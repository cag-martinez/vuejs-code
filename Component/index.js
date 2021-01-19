vue.component('todo-item', {
    template: '<li>This is a to-do</li>'
})

var app= new Vue({
    el="app",
    data: {
        groceryList:[
            {id:0, text:"lettuce"}
        ]

    }
})