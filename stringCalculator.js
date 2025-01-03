function stringCalculator(string){
    if(string==="") return 0;
    let defaultDelimiter = ",";
    if(string.startsWith("//")){
        const splitValue = string.split("\n");
        defaultDelimiter = splitValue[0][2];
        string = splitValue.splice(1, splitValue.length-1).join(defaultDelimiter)
    }else[
        string = string.replace(/\n/g, ",")
    ]    
    return string.split(defaultDelimiter).reduce((sum, currentValue) =>{
        if(parseInt(currentValue)<0) throw new Error(`Negatives not allowed:${currentValue}`)
        return sum + parseInt(currentValue)
    },0) 

}
module.exports = stringCalculator;