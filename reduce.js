x = [1, 2, 3, 4];
const reduceBase = function (x, f, init_value) {
    for (let i of x) {
        init_value = f(init_value, i)
    }
    return init_value
}
const f = (a, b) => a + b;
console.log(reduceBase(x, f, 0))
