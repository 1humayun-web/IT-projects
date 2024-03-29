function multilplier(num1) {
    return function (num2) {
        return num1 * num2;
    };
}
const triple = multilplier(3);
console.log(triple(5));
export {};
