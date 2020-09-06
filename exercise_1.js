//const count = undefined

const count = (() => {
    var counter = 0;
    return () => {
        counter += 1;
        return counter;
    }
})();

console.log(count())
console.log(count())
console.log(count())