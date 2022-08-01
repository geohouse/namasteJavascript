const users = [
  { firstName: "Emma", lastName: "Stone", age: 36 },
  { firstName: "Anne", lastName: "Hathaway", age: 38 },
  { firstName: "Claire", lastName: "Calbraith", age: 44 },
  { firstName: "Jennifer", lastName: "Lawrence", age: 35 },
  { firstName: "Bradley", lastName: "Cooper", age: 44 },
];

// List of full names of all users
const fullNames = users.map((user) => {
  return `${user.firstName} ${user.lastName}`;
});

console.log(fullNames);

// Object with each unique age as the keys and the count of people with that age as the values

const ageSummary = users.reduce(function (accumulator, current) {
  let currAge = current.age;
  console.log(currAge);
  // Check for the current age in the output holder (need to convert to string otherwise the age is
  // never found in the keys)
  // Could also just check directly if the currAge key is accessible in the accumulator as a key - e.g. if(accumulator[currAge]){}
  if (Object.keys(accumulator).includes(currAge.toString())) {
    accumulator[currAge] += 1;
  } else {
    accumulator[currAge] = 1;
  }
  return accumulator;
}, {});

console.log(ageSummary);

// Find the first name of all people younger than 40.
// Can chain filter, map, reduce together.
const filteredEntries = users
  .filter((user) => {
    if (user.age < 40) {
      console.log(user.firstName);
      return user;
    }
  })
  .map((user) => user.firstName);

console.log(filteredEntries);

const filteredEntriesRaw = users.filter((user) => {
  if (user.age < 40) {
    console.log(user.firstName);
    return user;
  }
});

const filteredNames = filteredEntriesRaw.reduce(function (
  outputNameArray,
  currentEntry
) {
  outputNameArray.push(currentEntry.firstName);
  return outputNameArray;
},
[]);

console.log(filteredNames);

const filteredNamesReduce = users.reduce(function (outputAccum, current) {
  if (current.age < 40) {
    outputAccum.push(current.firstName);
  }
  return outputAccum;
}, []);

console.log(filteredNamesReduce);
