function outer(x) {
    function inner(a) {
        console.log(x + 1);
        function triple() {
            console.log(a * 3);
        }
        triple();
    }
    inner(x + 1);
}
outer(4);
export {};
