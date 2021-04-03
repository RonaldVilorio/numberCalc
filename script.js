const submitButton = document.querySelector("#submitButton");

const obj = {
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
const gematriaObj = {
  A: 6,
  B: 12,
  C: 18,
  D: 24,
  E: 30,
  F: 36,
  G: 42,
  H: 48,
  I: 54,
};
console.log(gematriaObj.A);

submitButton.addEventListener("click", calculate);

function lifePathCalc() {
  const birthday = document.querySelector("#birthday").value;
  let lifePathNum = birthday
    .split("-")
    .reduce((sum, num) => sum + num)
    .split("")
    .map((str) => +str)
    .reduce((sum, num) => sum + num);
  if (lifePathNum !== 11 || lifePathNum !== 22) {
    lifePathNum = "" + lifePathNum;
    lifePathNum = +lifePathNum[0] + +lifePathNum[1];
    return lifePathNum;
  }
  return lifePathNum;
}

function nameNumberCalc() {
  let numArr = [];
  let fullName = document.querySelector("#fullName").value;
  fullName = fullName.replace(/\s/g, "").toUpperCase();

  for (let i = 0; i <= fullName.length - 1; i++) {
    for (let j = 1; j <= Object.keys(obj).length; j++) {
      if (obj[j].includes(fullName[i])) {
        numArr.push(j);
      } else {
        null;
      }
    }
  }
  return numArr.reduce((sum, num) => sum + num);
}
function calculate(e) {
  e.preventDefault();
  if (birthday.value === "" && fullName.value != "") {
    document
      .querySelector(".yourNumber")
      .append(`Name Number: ${nameNumberCalc()}`);
  } else if (fullName.value === "" && birthday.value != "") {
    document
      .querySelector(".yourNumber")
      .append(`Life Path Number: ${lifePathCalc()}`);
  } else if (fullName.value != "" && birthday.value != "") {
    document
      .querySelector(".yourNumber")
      .append(
        `Life Path Number: ${lifePathCalc()}  Name Number: ${nameNumberCalc()}`
      );
  }
}
