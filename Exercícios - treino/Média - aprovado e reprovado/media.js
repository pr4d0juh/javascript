function calcular(){
    var tmat = document.getElementById('mat')
    var tport = document.getElementById('port')
    var res = document.getElementById('res')

    var mat = Number(tmat.value)
    var por = Number(tport.value)

    var media = (mat + por)/2

     res.innerHTML = `Sua nota em Português foi ${por} <br>`
     res.innerHTML += `Sua nota em Matemática foi ${mat} <br>`
     res.innerHTML += `Sua média foi ${media} <br>`
     
     if(media >= 9){
        res.innerHTML += `Você foi <strong>APROVADO</strong> com distinção! <br>`
     } else if(media >=7) {
        res.innerHTML += `Você foi <strong>APROVADO</strong>! <br>`
     } else{
        res.innerHTML += `Você foi <strong>REPROVADO</strong>! <br>`
     }
}