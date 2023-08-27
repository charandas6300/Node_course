// const fs = require('fs')

// console.log('first')

// let data = fs.readFileSync('r1.txt')

// console.log('file data '+data)

// fs.writeFileSync('r1.txt',"hi hello namsthe");

// console.log(String(data));

// console.log('last')
const fs = require('fs')

console.log('first')

// let data = fs.readFileSync('r1.txt', 'utf-8') // Read file and convert Buffer to string

// console.log('file data ' + data)

// fs.writeFileSync('r1.txt', "hi hello namsthe")
// data = fs.readFileSync('r1.txt')

// console.log('original data: ' + data) // Print the original data

fs.readFile('r1.txt',cb1);

function cb1(err,data){
    if(err){
        console.error(err);
    }
    console.log("this data "+data)
    fs.readFile('r2.txt',cb2);
}



function cb2(err,data){
    if(err){
        console.log(err);
    }
    console.log("2->"+data);
    fs.readFile('r3.txt',cb3);
}



function cb3(err,data){
    if(err){
            console.log(err);
    }
    console.log("3->"+data)
}

console.log('last')
