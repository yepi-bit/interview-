
function arr(){
    setTimeout(function(){
        console.log('1');
    },0)
    async function async1(){
        console.log('4');
        await async2();
        console.log('6');
    }
    async function async2(){
        console.log('5');
    }
    async1();
    new Promise(function(resolve,reject){
        console.log('2');
        resolve();
    }).then(function(e2){
        console.log('h');
    })
    console.log('3');
}

console.log(arr());
