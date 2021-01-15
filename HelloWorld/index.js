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