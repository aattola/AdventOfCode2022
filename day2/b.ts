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

function pakota(input: string) {
  if (input === "A X") return 3;
  if (input === "A Y") return 4;
  if (input === "A Z") return 8;
  if (input === "B X") return 1;
  if (input === "B Y") return 5;
  if (input === "B Z") return 9;
  if (input === "C X") return 2;
  if (input === "C Y") return 6;
  if (input === "C Z") return 7;
  return 0;
}

const pisteet = split.map((game) => {
  const [enemy, me] = game.split(" ");
  let pisteet = 0;
  const pelipisteet = pisteita(enemy, me);

  // pakotetaan sitten
  const res = pakota(game);

  pisteet = pisteet + pelipisteet;

  return res;
});

const yht = pisteet.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("yht", yht);
