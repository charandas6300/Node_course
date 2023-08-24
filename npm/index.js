const figlet = require("figlet")

figlet("h e l l o ", function(err,data){
    if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return
    }
    console.log(data);
})