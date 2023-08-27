const myMiddle = (req,res,next) =>{
        console.log("Time: ");
        next()
}

module.exports = myMiddle