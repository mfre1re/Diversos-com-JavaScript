const notas = [80, 20, 90, 50];
let maiorNota = notas[0];
let menorNota = notas[0];
let nota = 0;

for (let i of notas) {
  nota += i;
  if (i < menorNota) {
    menorNota = i;
    console.log(menorNota);
  } else if (i > maiorNota) {
    maiorNota = i;
    console.log(maiorNota);
  }
}

console.log((nota - menorNota - maiorNota) / (notas.length - 2));
