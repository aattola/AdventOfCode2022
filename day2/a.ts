const input = await Deno.readTextFile("input.txt");

const split = input.split("\n");
console.log(split);
// x kivi
// y paperi
// z sakset

enum T {
  KIVI = "A",
  PAPERI = "B",
  SAKSET = "C",
}

function pisteita(enemy: string, me: string) {
  if (enemy === T.KIVI) {
    if (me === "X") return 3;
    if (me === "Y") return 6;
    if (me === "Z") return 0;
  }

  if (enemy === T.PAPERI) {
    if (me === "X") return 0;
    if (me === "Y") return 3;
    if (me === "Z") return 6;
  }

  if (enemy === T.SAKSET) {
    if (me === "X") return 6;
    if (me === "Y") return 0;
    if (me === "Z") return 3;
  }

  return 0;
}

const pisteet = split.map((game) => {
  const [enemy, me] = game.split(" ");
  let pisteet = 0;
  const pelipisteet = pisteita(enemy, me);

  if (me === "X") {
    pisteet = pisteet + 1;
  }

  if (me === "Y") {
    pisteet = pisteet + 2;
  }

  if (me === "Z") {
    pisteet = pisteet + 3;
  }

  pisteet = pisteet + pelipisteet;

  return pisteet;
});

const yht = pisteet.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("yht", yht);
