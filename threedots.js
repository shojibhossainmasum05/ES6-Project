const bestFriendAges = [19, 21, 15, 18, 20];
const friendAges = [27, 25, 22, 20, 28];
const bestBrotherAge = [30, 44, 35, 28, 44];
//const allAges = bestFriendAges.concat(friendAges).concat(bestBrotherAge);
const allAges = [...bestFriendAges, ...friendAges, ...bestBrotherAge];
// console.log(allAges);

const business = 6000;
const minister = 4000;
const sochib = 5000;
const takaBese = [6000, 4000, 5000];
// console.log(takaBese);
const maximun = Math.max(business, minister, sochib);
// const maximun = Math.max(...takaBese);
console.log(maximun);


