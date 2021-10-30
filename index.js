
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total =fromN;

  if (fromN<toN) {
    // console.log(fromN,toN,total);
    total=total+sum(fromN+1,toN);
  }
  //console.log("final",total);
  return total;

}
sum(3, 7);
module.exports = sum;
