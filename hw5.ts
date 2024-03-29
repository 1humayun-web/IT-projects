function multilplier(num1:number):(num2:number)=>number{
    return function(num2:number){
        return num1 * num2
    }
}
const triple = multilplier(3)
console.log(triple(5))
