const letra = "m"
const palavras = ["mamao", "maca", "melao", "melancia", "laranja", "limao"]
let contador = 0

for (let i of palavras){
    if (i[0] != letra){
        contador++
    }
}

console.log(contador)
