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
    console.log(lifePathNum);
    return lifePathNum;
  }
  console.log(lifePathNum);
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
  console.log(numArr.reduce((sum, num) => sum + num));
  return numArr.reduce((sum, num) => sum + num);
}
function calculate(e) {
  e.preventDefault();
  if (birthday.value === "" && fullName.value != "") {
    nameNumberCalc();
    // document.querySelector(".appendStuff").append("h1");
  } else if (fullName.value === "" && birthday.value != "") {
    lifePathCalc();
  }
}
