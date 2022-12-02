const input = await Deno.readTextFile("input.txt");

const split = input.split("\n");
console.log(split);
// x kivi
// y paperi
// z sakset

enum ME {
  HAVIO = "X",
  TASAPELI = "Y",
  VOITTO = "Z",
}

enum E {
  KIVI = "A",
  PAPERI = "B",
  SAKSET = "C",
}

function pisteita(enemy: string, me: string) {
  if (enemy === E.KIVI) {
    if (me === ME.HAVIO) return 3;
    if (me === ME.TASAPELI) return 6;
    if (me === ME.VOITTO) return 0;
  }

  if (enemy === E.PAPERI) {
    if (me === ME.HAVIO) return 0;
    if (me === ME.TASAPELI) return 3;
    if (me === ME.VOITTO) return 6;
  }

  if (enemy === E.SAKSET) {
    if (me === ME.HAVIO) return 6;
    if (me === ME.TASAPELI) return 0;
    if (me === ME.VOITTO) return 3;
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
