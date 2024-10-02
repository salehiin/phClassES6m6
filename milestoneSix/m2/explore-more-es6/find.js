// find retuns only first one among which meets the condition

const players = [75, 65, 67, 72, 55, 59];

const selected = players.find(player => player > 60);
console.log(selected)