
var test = 'global';
const b = (function () {
    const test = 'scope';
    return {
        test: '111',
        say() {
            console.log(test);
        }
    };
}());
b.say(); // 'scope'
