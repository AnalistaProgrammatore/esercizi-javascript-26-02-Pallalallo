
function generator(...args) {
    let a = Array.from(args);
    return a;
}
let b = generator(13, 14, 15, 16)
console.log(b)
