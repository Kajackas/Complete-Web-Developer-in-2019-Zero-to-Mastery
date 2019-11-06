// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const includesName = (list, name) => {
    let positiveNames =[];
    list.forEach(element => {
        if (element.includes(name)){
            positiveNames.push(element)
            console.log(`${element} added to list`);
        }
    });
    return positiveNames;
}
includesName(dragons, "a");

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerOf100 = (number) => number**1000;
powerOf100(2);
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

