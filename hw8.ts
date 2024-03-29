let number = function( mycallback:any, ...x:any[]){
   x.forEach((Element:any)=>{
    let double = Element * 2
    mycallback(double)});

}
function callback(result:any){
    console.log(result)
}
number(callback,32,2,3,33,3,3,2,2,2)