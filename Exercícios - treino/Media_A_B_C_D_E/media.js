function calcular(){
    var m = Number(document.getElementById('nota_m').value)
    var q = Number(document.getElementById('nota_q').value)
    var f = Number(document.getElementById('nota_f').value)
    var res = document.getElementById('res')

    var media = (m + q + f) / 3
    Math.round(media)

    res.innerHTML = `<p>Sua nota foi: ${media}</p>`
    if (media <= 4) {
        res.innerHTML += `<p>Sua média em exatas foi E</p>`
    } else if (media <= 6){
        res.innerHTML += `<p>Sua média em exatas foi D</p>`
    } else if (media <= 7.5){
        res.innerHTML += `<p>Sua média em exatas foi C</p>`
    } else if (media <= 9){
        res.innerHTML += `<p>Sua média em exatas foi B</p>`
    } else if (media <= 10){
        res.innerHTML += `<p>Sua média em exatas foi A</p>`
    }

    if (media > 5){
        res.innerHTML += `<p>Você foi APROVADO</p>`
    } else {
        res.innerHTML += `<p>Você foi REPROVADO</p>`
    }
}