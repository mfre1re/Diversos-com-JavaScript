const nomeAnimal = "Felis) silvestris *catus&";
let nomeAnimalTratado = "";

for (let i = 0; i < nomeAnimal.length; i++) {
  if ("!@#$%&*()".includes(nomeAnimal[i])) {
  } else {
    nomeAnimalTratado += nomeAnimal[i];
  }
}

console.log(nomeAnimalTratado);
