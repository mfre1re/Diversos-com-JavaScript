const precos = [30, 10, 54, 76, 1, 4, 35]
let debito = Infinity

for (let i = 0; i < precos.length; i++){
    for (let c = i + 1; c < precos.length; c++){
        let debitoVenda = precos[i] - precos[c]
        if (debitoVenda < debito && debitoVenda > 0){
            debito = debitoVenda
        }
    }
} 

console.log(debito)