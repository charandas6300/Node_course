let myPromise = new Promise(function(resolve, reject){
    const a = 9;
    const b = 5;
    const c = 10;

    setTimeout(()=>{if((a+b+c)===25){
                        resolve('equal')
                    }
                    else{
                        reject('not')
                    }
                },1000);

})

//pending
// console.log(myPromise);

//fullfilled(.then for resolve)
myPromise.then(function(res){
    console.log(res);
})

//rejected(.catch for reject)
myPromise.catch(function(res){
    console.log(res);
})