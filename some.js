let k = false;
function someBase(x, y) {
    let v = null
    for (let a of x) {
        if (y(a)) {
            v = true;
        }
    }
    if (v) return true;
    else return false
}

function someReduce(x, y) {
    return x.reduce(y, null)
}

console.log(someReduce([1, 3, 0, 1], (k, y) => { return (y > 2) || k }))
