function outer(x:any){
    function inner(a:any){
        console.log( x+1)

        function triple(){
            console.log(a * 3)
        }
        triple()
    }
    inner(x + 1)
}
outer(4)