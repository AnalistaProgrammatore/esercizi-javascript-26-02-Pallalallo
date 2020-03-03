const filterReduce = function (x, y) {
    b = [];
    x.reduce(y)
    return b
}


function filterBase(x, y) {
    let b = [];
    for (let a of x) {
        if (y(a) === true) {
            b = b.concat(a);
        }
    }
    return b;
}

console.log(filterReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (k, y) => { if (y % 2 === 0) b = b.concat(y) }))
