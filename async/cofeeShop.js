function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('yay coffee');
        }
        else{
            reject('not applicable');
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log("order processed")
        resolve(`${order} is served`);
    })
}

// placeOrder('coffe').then(function(orderP){
//     console.log(orderP);
//     let orderProcessed = processOrder(orderP)
//     return orderProcessed
    
// }).then(function(processOrder){
//     console.log(processOrder);
// }).catch(function(err){
//     console.log(err)
// })

//async and await are keywords

async function seveOrder(){
    try{
    let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced)
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder)
    }
    catch(err){
        console.log(err)
    }
}


seveOrder()












































