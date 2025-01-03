const stringCalculator  = require("./stringCalculator")

test("Return 0 if its empty string", ()=>{
    expect(stringCalculator("")).toBe(0);
})

test("Return that number if its a single number ",()=>{
    expect(stringCalculator("1")).toBe(1);
})
test("Return the sum if there are multiple numbers in that string", ()=>{
    expect(stringCalculator("1,2")).toBe(3);
})


test("Return the sum of each new line seperated strings", ()=>{
    expect(stringCalculator("1\n2,2")).toBe(5);
})
test("Return the sum  of numbers with custom delimiter", ()=>{
    expect(stringCalculator("//;\n1\n3;2\n4")).toBe(10)
})