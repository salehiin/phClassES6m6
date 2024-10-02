
// filter selects elements based on a condition and returns always an array with the elements that fulfilled the condition or empty array.

const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
const selected = players.filter(p => p % 2 === 1);
console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);