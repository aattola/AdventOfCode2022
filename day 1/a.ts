const input = await Deno.readTextFile("input.txt");

const split = input.split("\n");

let lastIndex = 0;

const ryhmat: string[][] = [];

split.forEach((line, index) => {
  if (line === "") {
    const group = split.slice(lastIndex, index);

    ryhmat.push(group);

    split[index] = "kissa";
    lastIndex = index;
  }
});

const y = ryhmat.map((ryhma) => {
  const yhteiset = ryhma.reduce((acc, curr) => {
    if (curr === "kissa") {
      return acc;
    } else return acc + parseFloat(curr);
  }, 0);

  return yhteiset;
});

// const largest = Math.max(...y);
// console.log(largest);

// sort array y from highesst to lowerst

const arr = y.sort((a, b) => b - a);

const most = arr.reduce((acc, curr, index) => {
  if (index < 3) {
    return acc + curr;
  }

  return acc;
}, 0);

console.log(most, arr);
