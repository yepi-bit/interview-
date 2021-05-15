
const MT = async (v) =>{
    return new Promise(resolve => {
       console.log(v, '你真帅啊');
        setTimeout(resolve,1000,v**3)
    })
};
async function List() {
    for (let i=0;i<5;i++){
        let res = await MT(i);
        console.log(res);
    }
}

List()