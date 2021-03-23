console.log("hey");
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
let fullName = "Ronald Adolfo Vilorio";
fullName = fullName.replace(/\s/g, "").toUpperCase();

// translate each letter into numbers to sum up
let numArr = [];

for (let i = 0; i <= fullName.length - 1; i++) {
  for (let j = 1; j <= Object.keys(obj).length; j++) {
    if (obj[j].includes(fullName[i])) {
      numArr.push(j);
    } else {
      null;
    }
  }
}
// sum up the array of numbers
let nameNumber = numArr.reduce((sum, num) => sum + num);
// life Path Number

