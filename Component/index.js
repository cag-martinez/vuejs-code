Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text}}</li>'
})

var app= new Vue({
    el:"#app7",
    data: {
        groceryList:[
            {id:0, text:"lettuce"},
            {id:1, text:'tomatoes'},
            {id:2, text:'avocado'}
        ]
    }
})