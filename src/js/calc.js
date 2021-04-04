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
            return this.res;
        }
    }
});