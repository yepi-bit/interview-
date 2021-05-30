function prototypeExtend() {
    var F = function () {},
        args = arguments,
        i = 0,
        len = args.length;
        for (; i < len; i++) {
            for (var j in args[i]) {
                F.prototype[j] = args[i][j];

        }
    }
    return new F()
}

var penguin = prototypeExtend({
    speed : 20,
    swin :function () {
        console.log('游泳速度' + this.speed);
    },
    run :function (speed) {
        console.log('奔跑速度' + speed);
    },
    jump :function () {
        console.log('跳跃动作');
    }
})
penguin.swin();
penguin.run(10);
penguin.jump()
