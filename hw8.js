let number = function (mycallback, ...x) {
    x.forEach((Element) => {
        let double = Element * 2;
        mycallback(double);
    });
};
function callback(result) {
    console.log(result);
}
number(callback, 32, 2, 3, 33, 3, 3, 2, 2, 2);
export {};
