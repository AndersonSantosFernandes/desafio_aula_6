const desafio = () =>{
   
    
    let decide

    while (decide != "sair") {     

        alert('Encontre o valor de delta na equação quadrática')

        let delta = 0
    
        const valorA = parseInt(prompt('Digite o valor de A'))
        const valorB = parseInt(prompt('Digite o valor de B'))
        const valorC = parseInt(prompt('Digite o valor de C')) 
    const equacao = (a,b,c) => {  
    
       return delta = Math.pow(b,2) - (4 * a * c)
    }
    equacao(valorA,valorB,valorC)
    
    alert('O valor de delta é '+delta)
    
    const raiz = parseInt(prompt("Digite 1 para mostrar o primeiro resultado \n Digite 2 para mostrar o segundo resultado"))
    const raizes = (d,a,b) =>{
        let raiz1 = result = ((-b) + Math.sqrt(d))/(2*a)
        let raiz2 = result1 = ((-b) - Math.sqrt(d))/(2*a)
        
        if(raiz == 1){
            resultado = raiz1
            nomeRaiz = 'primeira'
        }else if(raiz == 2){
            resultado = raiz2
            nomeRaiz = 'segunda'
        }
        alert("O valor da " + nomeRaiz+ " raiz é: " + resultado )
    }
    raizes(delta,valorA,valorB)

    let prpt = prompt('Digite sair para encerrar ou Enter para calcular novamente')

    if(prpt == "sair"){
        decide = prpt
    }
}
   
    }


    

   

const desafio2 = () =>{

let escolha

while (escolha != "saida") {
    
    let valorTotal = parseInt(prompt("Digite o valor total da compra/divida"))
    let parcelas = parseInt(prompt("Digite a quantidade de parcelas"))
    let valorParcelas = valorTotal / parcelas
    for (let index = 1; index <= parcelas; index++) {
    
        alert(`Valor da ${index}ª parcela = ${valorParcelas.toFixed(2)}`)
    
       
    }

   let saida = prompt("Digite sair para encerrar")
        if(saida == "Sair" || saida == "sair"){
            escolha = "saida"
        }

}








}


