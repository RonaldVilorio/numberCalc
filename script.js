// 26 letters
let obj = {
  1: ["A", "J", "S"],
  2: ["B", "K", "T"],
  3: ["C", "L", "U"],
  4: ["D", "M", "V"],
  5: ["E", "N", "W"],
  6: ["F", "O", "X"],
  7: ["G", "P", "Y"],
  8: ["H", "Q", "Z"],
  9: ["I", "R"],
};
// capture user input
// let fullName = "Ronald Adolfo Vilorio";
// fullName = fullName.replace(/\s/g, "").toUpperCase();

// translate each letter into numbers to sum up
// let numArr = [];

// for (let i = 0; i <= fullName.length - 1; i++) {
//   for (let j = 1; j <= Object.keys(obj).length; j++) {
//     if (obj[j].includes(fullName[i])) {
//       numArr.push(j);
//     } else {
//       null;
//     }
//   }
// }
// sum up the array of numbers
// let nameNumber = numArr.reduce((sum, num) => sum + num);

// grab  the input of the user
// add function to html buttton
// now add an event listener to wait for user to click on button
// first find the button

const submitButton = document.querySelector("#submitButton");
const birthday = document.querySelector("#birthday").value;
const fullName = document.querySelector("#fullName").value;

function calculate(e) {
  e.preventDefault();

}
