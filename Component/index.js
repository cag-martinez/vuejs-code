Vue.component('todo-item', {
    template: '<li>This is a to-do</li>'
})

var app= new Vue({
    el="#app7",
    data: {
        groceryList:[
            {id:0, text:"lettuce"}
        ]
    }
})