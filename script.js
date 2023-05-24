var hobbies = ["swimming", "flying", "running", "basketball", "fighting"];
hobbies.push("shopping");
hobbies.pop();
hobbies.splice(2, 2, "woodworking", "cooking");
hobbies.shift();
hobbies.unshift("rapping");
// console.log(hobbies);

var goals = ["finish program", "make 5 new sites", "get a job"];
var allTheThings = hobbies.concat(goals);
allTheThings.splice(5, 1);
// console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}.`;
});

console.log(plans);
