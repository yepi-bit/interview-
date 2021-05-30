Promise.all = (promise) =>{
    let count = 0;
    let list = [];
    let len = promise.length;
    return new Promise((resolve, reject)=>{
        promise.forEach((p)=>{
            p.then(
                (res)=> {
                    count++;
                    list.push(res);
                    if (count === len) {
                        resolve(list);
                    }
                    (err) => {
                        reject(err);
                    }
          }
        );
        });
    });
}