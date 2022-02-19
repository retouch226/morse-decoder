module.exports = {
  decode,
};
const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};
// function decode(expr) {
//   expr = expr.split("");
//   //console.log(expr);
//   let result = [];
//   let array = [];
//   const values = Object.values(MORSE_TABLE);
//   //console.log(values);
//   for (let value of expr) {
//     array.push(
//       Object.keys(MORSE_TABLE).find((key) => MORSE_TABLE[key] === value)
//     );
//   }
//   console.log(array);
//   result = array.map((item) => {
//     return item
//       .split("")
//       .map((char) => {
//         if (char === ".") {
//           return "10";
//         }
//         if (char === "-") {
//           return "11";
//         }
//         if (char === "*") {
//           return "*";
//         }
//       })
//       .join("");
//   });

//   let newResult = [];
//   result.forEach((item) => {
//     if (item.split("").length < 10) {
//       newResult.push(item.padStart(10, "0"));
//     } else {
//       newResult.push(item);
//     }
//   });
//   console.log(newResult);
//   return newResult;
// }
// console.log(decode("me "));

// function decode(expr) {
//   expr = expr.split(" ");
//   let i = 0;
//   let newexpring = "";
//   //console.log(expr);
//   const result = expr.map((item) => {
//     if (MORSE_TABLE.hasOwnProperty(item)) {
//       return MORSE_TABLE[item];
//     }
//   });
//   return result.join("");
// }

////////////////////////////////////////////////////////////////EASY LEVEL
const expr =
  "00000000100000111010101010111100111011100000001011111110101011111010101010101010";

function decode(expr) {
  expr = getSpaces(expr);
  let tempArray = [];
  let morse = [];
  expr = expr.split(" ");

  let arrayWithoutZero;
  for (let i = 0; i < expr.length; i++) {
    arrayWithoutZero = expr[i].split("");
    for (let j = 0; j < arrayWithoutZero.length; j++) {
      if (arrayWithoutZero[j] !== "1") {
        arrayWithoutZero[j] = "";
      } else {
        expr[i] = arrayWithoutZero.join("");
        break;
      }
    }
  }
  console.log(expr);

  for (let i = 0; i < expr.length; i++) {
    tempArray = expr[i].split("");

    while (tempArray.length > 0) {
      if (tempArray[0] + tempArray[1] === "10") {
        morse.push(".");
        tempArray.splice(0, 2);
      } else if (tempArray[0] + tempArray[1] === "11") {
        morse.push("-");
        tempArray.splice(0, 2);
      } else if (tempArray[0] === "*") {
        morse.push("*");
        tempArray.splice(0, 1);
      }
    }
    morse.push(" ");
    tempArray = [];
  }
  morse = morse.join("").trim().split(" ");
  console.log(morse);

  const result = morse.map((item) => {
    if (MORSE_TABLE.hasOwnProperty(item)) {
      return MORSE_TABLE[item];
    }
  });
  console.log(result);
  return result.join("");
}

///////////////add spaces to expression
function getSpaces(expr) {
  let tempArray = [];
  let morse = [];
  expr = expr.split("");
  for (let i = 0; i < expr.length; i++) {
    if (i === 10 && i !== 0) {
      tempArray.push(" ");
    }
    if (i % 10 === 0 && i !== 0 && i !== 10) {
      tempArray.push(" ");
      tempArray.push(expr[i]);
    } else {
      tempArray.push(expr[i]);
    }
  }
  console.log(tempArray.join(""));
  return tempArray.join("");
}

console.log(decode(expr));
