// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const nameArray=[];
array.forEach((person)=>{
  nameArray.push(person.username + "!");
});
console.log("!", nameArray);


//Create an array using map that has all the usernames with a "? to each of the usernames
const questionArray = array.map(person => person.username + "?");
console.log("?", questionArray);


//Filter the array to only include users who are on team: red
const filterArray = array.filter(person => person.team === "red");
console.log("red", filterArray);


//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator,currentValue) => {
  console.log("current:" + currentValue.score + " accumulator" + accumulator);
  return currentValue.score + accumulator;
},0);
console.log("reduce",reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })
// console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const userList = array.map(user => {
  let userObject = {
    username : user.username + "!",
    team: user.team + "!",
    score: user.score + "!",
    items: user.items.map(item => item + "!")
  }
  return userObject;
})
console.log(userList);
