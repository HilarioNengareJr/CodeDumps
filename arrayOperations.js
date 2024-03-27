// javascript arrays

const myGroceryList = ['milk','rice', 'beans','beef', 'chicken','redbull case']

//  removing last list item, and storing it
let removedItem = myGroceryList.pop()
console.log('\n' + removedItem + ' was removed from the list.');

// oops forgot eggs
myGroceryList.push('eggs');
console.log('\nGrocery list has ' + myGroceryList)

let listItem = 'rice'

let index = myGroceryList.indexOf(listItem) 
// where is rice located in my list
if ( index === -1){
    console.log(`no ${listItem} in your list.`)
}
else{
    console.log(`\nyou can find eggs at ${index}`);
}

// removing eggs using splice(index, how-many-things-to-remove)
myGroceryList.splice(index, 1);
console.log('\nEggs were removed from the list!');

// accessing array elements using: for-of loop
console.log('\nnow we have these items in our grocery list:')
for(const item of myGroceryList){
  console.log(item);
};

// mapping effects on each item in the array using for loop

const newList = [];

for (let i = 0; i < myGroceryList.length; i++){
    item = `${i+1}. ${myGroceryList[i]}`; // bruteforce mapping
    newList.push(item);
}

console.log('\nbrute force mapping returns: ',newList);


// using the map() function

const addIndex = (item) => {
    item = `${myGroceryList.indexOf(item)+1}. ${item}`;
    return item;
}

const newMapList = myGroceryList.map(addIndex);
console.log('\nusing map function returns: ',newMapList);

// filtering array..filter will traverse the array structure and filter on the basis of our condition
const filterItems = (item) => {
    return item.length > 4;
}

const newFilterList = myGroceryList.filter(filterItems);
console.log('\nfiltering our groceries item returns: ',newFilterList);

// well we can join the groceries to be a string using .join()
const joinedList = myGroceryList.join(' ');
console.log('\njoining our grocery list returns new string object: ',joinedList);

// lets place them back as array items in our list
const arrayList = joinedList.split(' ');
console.log('\nsplitting the joined array returns: ',arrayList);

/**
 * NoteToSelf:
 * You wanna use const for data structures. When modify individual elements, you are not modifying the structure it remains at the same pointed address!
 * You can use .toString() instead of .join().
* */
 
 

 
 




