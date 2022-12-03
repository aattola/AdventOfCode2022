const input = await Deno.readTextFile("input.txt");

const split = input.split("\n");

function getPriorityNumber(letter: string) {
  if (letter === letter.toUpperCase()) {
    // isompi kirjain

    const number = letter.charCodeAt(0);
    return number - 64 + 26;
  } else {
    // pienempi kirjain

    const number = letter.charCodeAt(0);
    return number - 64 - 32;
  }
}

const priorityNumbers: number[] = [];

let counter = 0;
let arrCounter = 0;
const groups: string[][] = [];
for (let index = 0; index < split.length; index++) {
  const element = split[index];

  counter = counter + 1;

  groups[arrCounter] = groups[arrCounter]
    ? [...groups[arrCounter], element]
    : [element];

  if (counter === 3) {
    counter = 0;
    arrCounter++;
  }
}

groups.forEach((group, i) => {
  const o1obj = {};
  const o1arr = [];

  const g0 = group[0].split("");
  const g1 = group[1].split("");
  const g2 = group[2].split("");

  g0.forEach((letter) => {
    if (g1.includes(letter) && g2.includes(letter)) {
      if (o1arr[i]) return;

      o1arr[i] = true;
      console.log("kaikki sisältää", letter, i);
      priorityNumbers.push(getPriorityNumber(letter));
    }
  });

  // for (let index = 0; index < group.length; index++) {
  //   const element = group[index];
  //   const splitup = element.split("");

  //   splitup.forEach((letter) => {
  //     o1obj[letter] = o1obj[letter] ? o1obj[letter] + 1 : 1;
  //   });
  // }

  // console.log(o1obj);
});

console.log(priorityNumbers.length, priorityNumbers);

// split.forEach((ikinen, i) => {
//   const mistasplitataan = ikinen.length / 2;

//   const ekaosa = ikinen.slice(0, mistasplitataan);
//   const tokaosa = ikinen.slice(mistasplitataan, 9999);

//   const o1obj = {};

//   const o1 = ekaosa.split("");
//   const o2 = tokaosa.split("");

//   o1.forEach((letter) => {
//     o1obj[letter] = true;
//   });

//   for (let index = 0; index < o2.length; index++) {
//     const letter = o2[index];

//     if (o1obj[letter]) {
//       const prio = getPriorityNumber(letter);

//       console.log("number", prio, "letter", letter);
//       return priorityNumbers.push(prio);
//     }
//   }
// });
// console.log(split.length, priorityNumbers.length);

const count = priorityNumbers.reduce((a, b) => a + b, 0);
console.log(count);
