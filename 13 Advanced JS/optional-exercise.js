// QUESTION 1
const inputArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const inputArray2 = [1, "2", "3", 2];

// [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
// const groupArrayByValue = arr =>{
//     arr.reduce((r, v, i, a) => {
//         if (v === a[i - 1]) {
//             r[r.length - 1].push(v);
//         } else {
//             r.push(v === a[i + 1] ? [v] : v);
//         }
//         return r;
//     }, [])
// }

// const groupArrayByType = arr =>{
//     arr.reduce((r, v) => {
//         typeof v === "number" ? r[0].push(v) :r[1].push(v);
//         console.log(r);
//         return r;
//     }, [[],[]])
// }

// let answ = groupArrayByType(inputArray2);

let sortedArray =inputArray.sort((a, b) => a - b).reduce((r, v, i, a) => {
    if (v === a[i - 1]) {
        r[r.length - 1].push(v);
    } else {
        r.push(v === a[i + 1] ? [v] : v);
    }
    return r;
}, []);


// QUESTION 2

let arrayNum = [1,2,3,4,5];
let targetNum = 1;

const findSum = (arr, num) =>{
    // reduce, map, find
}
 
// QUESTION 3

const colorSwapper = (color) =>{

}