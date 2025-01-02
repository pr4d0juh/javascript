function enviar(){
    var n1txt = document.getElementById('n1txt')
    var n2txt = document.getElementById('n2txt')
    var n3txt = document.getElementById('n3txt')
    var res = document.getElementById('res')

    var n1 = Number(n1txt.value)
    var n2 = Number(n2txt.value)
    var n3 = Number(n3txt.value)

//Maior numero
    if (n1 > n2 && n1 > n3){
        res.innerHTML = `O numero maior é o primeiro -> ${n1} <br>`
    } else if (n2 > n1 && n2 > n3){
        res.innerHTML = `O numero maior é o segundo -> ${n2} <br>`
    } else if (n3 > n1 && n3 > n2){
        res.innerHTML = `O numero maior é o terceiro -> ${n3} <br>`
    }

//Menor número
    if (n1 < n2 && n1 < n3){
         res.innerHTML += `O numero menor é o primeiro -> ${n1}`
    } else if(n2 < n1 && n2 < n3){
        res.innerHTML += `O numero menor é o segundo -> ${n2}`
    } else{
        res.innerHTML += `O numero menor é o terceiro -> ${n3}`
    }
}