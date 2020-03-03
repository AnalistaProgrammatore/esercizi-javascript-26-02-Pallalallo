/**

const arrayToList = function (x) {
    let aList = null;
    const y = (k, b) => x[x.length - b - 1]
    const z = (k, b) => {
        aList = {
            value: k, rest: aList
        }
    }
    x.map(y).map(z);
    return aList;
}

//questo non funziona è una prova che ho fatto
//supponendo di poter usare reduce su una lista,
//gli altri esercizi di aList li farei uguali a 
//quelli del 19/02
const listToArray = function (a) {
    b = [];
    const y = (k, z) => { z = aList.value; aList = aList.rest; return z }
    b = b.concat(a.reduce(y));
    return b
}


console.log(arrayToList([1, 2, 3]))
**/
