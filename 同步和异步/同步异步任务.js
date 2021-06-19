

setTimeout(_ => console.log(1))
new Promise(resolve => {
    resolve()
    console.log(2)
}).then(_ => {
    setTimeout(_ => console.log(3))
    console.log(4)
    Promise.resolve().then(_ => {
        console.log(5)
    }).then(_ => {
        Promise.resolve().then(_ => {
            console.log(6)
        })
    })
})
console.log(7)
