function inverter(){
    var n1txt = document.getElementById('n1')
    var n2txt = document.getElementById('n2')
    var res = document.getElementById('res')

    var n1 = Number(n1txt.value)
    var n2 = Number(n2txt.value)

    res.innerHTML = `Variáveis antes: ${n1} e ${n2} <br>`

    var aux = n1
    var n1 = n2
    var n2 = aux

    res.innerHTML += `Variáveis depois: ${n1} e ${n2}`
}