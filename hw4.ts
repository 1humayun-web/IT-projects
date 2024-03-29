function sumall(a:number , b :number , ...args:number[]){
    let num :any = a + b

    for(let n of args){
       num = num + n
    }

   return num 

}
let result =  sumall(4,5,2,5,7,3,6,8,9)
console.log(result)

