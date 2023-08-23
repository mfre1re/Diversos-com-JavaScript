const produtos = [100, 500, 100, 200, 50];
let menorValor = produtos[0];
let valorTotal = 0;

for (let i = 0; i < produtos.length; i++) {
  valorTotal += produtos[i];
  if (produtos.length >= 5) {
    if (produtos[i] < menorValor) {
      menorValor = produtos[i];
    }
  }
}

if (produtos.length >= 5) {
  console.log(valorTotal - menorValor);
} else {
  console.log(valorTotal);
}
