const sequencia = "<";
const lista = [0, 1, 2, 3, 4, 5, 6];
let contador = 0;

for (let i = 0; i < sequencia.length; i++) {
  if (sequencia[i] === ">") {
    contador++;
    if (contador > 6) {
      contador = 0;
    }
  } else {
    contador--;
    if (contador === -1) {
      contador = 6;
    }
  }
}

console.log(lista[contador]);
