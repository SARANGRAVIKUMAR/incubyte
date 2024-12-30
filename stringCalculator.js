function stringCalculator(string){
    if(string==="") return 0;
    return string.split(",").reduce((sum, currentValue) => sum + parseInt(currentValue), 0);

}
module.exports = stringCalculator;