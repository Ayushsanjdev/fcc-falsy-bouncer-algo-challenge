function bouncer(arr) {
  return arr.filter(Boolean); //just filter the falsy values or using Boolean;
}

console.log(bouncer([7, "ate", "", false, 9]));
//[7, "ate", 9]



// other way using loop and without filter but with push

function bouncer(arr) {
  let newArr = []; //assigning a variable with empty array
  for (let i = 0; i < arr.length; i++) { //iterating through each index of array till last index
    if(arr[i]) { // and if index of arr is true then
      newArr.push(arr[i]); // push the indexes of array to the variable
    }
  }
  return newArr; //finally return it
}

console.log(bouncer([7, "ate", "", false, 9]));
// [7, "ate", 9]
