let E; //exam mark out of 100
let G; //grade assigned out of 100
let L; //lab mark out of 100

//Set F,M,A and ls1-7
let F; //final exam mark out of 100
let M; //midterm exam mark out of 100
let A; //assignment mark out of 100

let ls1;
let ls2;
let ls3;
let ls4;
let ls5;
let ls6;
let ls7;

let E1 = (F * 50) / 75 + (M * 15) / 75 + (A * 10) / 75;

if (M >= F) {
  E = E1;
} else {
  E = E1 + ((F - M) * 15) / 75 / 2;
}

if ((ls1 >= 70) & (ls2 >= 70) & (ls3 >= 70) & (ls4 >= 70) & (ls5 >= 70) & (ls6 >= 70)) {
  L = (ls1 + ls2 + ls3 + ls4 + ls5 + ls6) / 12 + ls7 / 2;
} else {
  L = (ls1 + ls2 + ls3 + ls4 + ls5 + ls6) / 12;
}

if (E < 50 || L < 50) {
  if (E < L) {
    G = E;
  } else {
    G = L;
  }
} else {
  if (50 <= E <= 65) {
    G = E * ((75 + 25 * ((65 - E) / 15)) / 100) + L * ((25 * ((E - 50) / 15)) / 100);
  }
  if (E > 65) {
    G = (E * 75) / 100 + (L * 25) / 100;
  }
}

console.log(G);
