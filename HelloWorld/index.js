var app = new Vue ({
    el: '#app',
    data: {
        message: 'hello world of vue'
    }
});

var app2 = new Vue ({
    el: '#app-2',
    data: {
        message: 'this page was loaded on ' + new Date().toLocaleString() + '!'
    }
})

// Here i can look in the console and change seen: true to 
// app3.seen = false to remove the sentence
var app3 = new Vue ({
    id: '#app-3',
    data: {
        
        seen: false
    } 
})