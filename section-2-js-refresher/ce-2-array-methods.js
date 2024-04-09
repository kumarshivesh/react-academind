/*
// Using `traditional for loop`
function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  let resultArray = [];
  for(let i = 0; i < numberArray.length; i++) {
    let obj = {
      val: numberArray[i]
    } 
    resultArray.push(obj);
  }
  return resultArray;
}

console.log(transformToObjects([1, 2, 3]));
*/

// Using `map() method`
function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  return numberArray.map((number) => {
    return {val: number}
  });
}

console.log(transformToObjects([1, 2, 3]));