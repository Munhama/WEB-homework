new Vue({
    el: '#app-calc',
    data: {
        a: 0,
        b: 0,
        op: '+',
        res: null,
    },
    methods: {
        sum: function() {
            switch (this.op) {
                case '+':
                    this.res = this.a + this.b;
                    break;
                case '-':
                    this.res = this.a - this.b;
                    break;
                case '*':
                    this.res = this.a * this.b;
                    break;
                case '/':
                    this.res = this.a / this.b;
                    break;
            }
            this.log();
            return this.res;
        },

        log: function() {
            let now = new Date();
            let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

            let timestamp = date + ' ' + time;

            let log = timestamp + ' ===> ' + this.a + ' ' + this.op + ' ' + this.b + ' = ' + this.res;
            $.ajax({
                type: "POST",
                url: "../php/log.php",
                data: {data:log}
            })
        },
    }
});