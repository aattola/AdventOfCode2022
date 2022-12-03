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

const priorityNumbers: string[] = [];

split.forEach((ikinen, i) => {
  const mistasplitataan = ikinen.length / 2;

  const ekaosa = ikinen.slice(0, mistasplitataan);
  const tokaosa = ikinen.slice(mistasplitataan, 9999);

  const o1obj = {};

  const o1 = ekaosa.split("");
  const o2 = tokaosa.split("");

  o1.forEach((letter) => {
    o1obj[letter] = true;
  });

  for (let index = 0; index < o2.length; index++) {
    const letter = o2[index];

    if (o1obj[letter]) {
      const prio = getPriorityNumber(letter);

      console.log("number", prio, "letter", letter);
      return priorityNumbers.push(prio);
    }
  }
});
console.log(split.length, priorityNumbers.length);

const count = priorityNumbers.reduce((a, b) => a + b, 0);
console.log(count);
