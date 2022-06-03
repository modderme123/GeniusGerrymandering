console.log("%cEaster Egg 3", "font-size:200px")

let gerrydemocrat = {
  a: [1, 2, 3, 4, 5],
  b: [7, 10, 11, 13, 14, 15],
  c: [6, 8, 9, 12, 16, 20],
  d: [17, 18, 19, 21, 22, 23]
}
let windemocrat = {
  a: "democratfill",
  b: "democratfill",
  c: "republicanfill",
  d: "democratfill"
}
let ademocrat = []
for (let color in gerrydemocrat) {
  for (let index of gerrydemocrat[color]) {
    ademocrat[index] = color;
  }
}

let gerryrepublican = {
  a: [1, 2, 3, 4, 6],
  b: [5, 7, 10, 13, 17, 18],
  c: [8, 9, 11, 12, 14, 15],
  d: [16, 19, 20, 21, 22, 23]
}
let winrepublican = {
  a: "republicanfill",
  b: "democratfill",
  c: "tiefill",
  d: "republicanfill"
}
let arepublican = []
for (let color in gerryrepublican) {
  for (let index of gerryrepublican[color]) {
    arepublican[index] = color;
  }
}
let check = document.getElementById("mycheck");
let map = document.getElementById("map");
let output = document.getElementById("output");
let hovered = 0;
map.querySelectorAll("path").forEach((x) => {
  
  const j = +x.getAttribute("id").slice(1);
  x.addEventListener("mouseenter", (e) => {
    hovered = j;
    dohover();
    
  })
});
check.onchange = () => {
  dohover();
}
function dohover() {
  map.querySelectorAll("path").forEach((y) => {
    y.classList.toggle("democratfill", false)
    y.classList.toggle("republicanfill", false)
    y.classList.toggle("tiefill", false)
  })


  const j = hovered;
  let ee = ""
  if (j == 11 && check.checked) {
    ee = "& \\text{Easter Egg 6}";
  }
  const x = document.getElementById("p" + hovered);
  const fill = x.classList.contains("republican");
  const cell = (check.checked ? ademocrat : arepublican)[hovered];
  const win = (check.checked ? windemocrat : winrepublican)[cell];
  katex.render(String.raw`\begin{aligned}
      & i = ${j} \\
      & j = \text{${(check.checked ? ademocrat : arepublican)[hovered]}} \\
      & y_{${cell}} = ${win == "republicanfill"?1:win=="tiefill"?0.5:0} \\
      & x_{${j} \text{ a}} = ${+(cell == "a")} \\
      & x_{${j} \text{ b}} = ${+(cell == "b")} \\
      & x_{${j} \text{ c}} = ${+(cell == "c")} \\
      & x_{${j} \text{ d}} = ${+(cell == "d")} \\
      ${ee}
    \end{aligned}
    `, output, {
      // throwOnError: false,
      displayMode: true,
    })
  
  for (let i of (check.checked ? gerrydemocrat : gerryrepublican)[cell]) {
    document.getElementById("p" + i).classList.toggle((check.checked ? windemocrat : winrepublican)[cell], true)
  }
}
