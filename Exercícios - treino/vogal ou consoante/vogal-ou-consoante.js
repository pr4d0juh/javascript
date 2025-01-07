function enviar(){
    var letra = document.getElementById('letra').value.toUpperCase()
    var res = document.getElementById('res')

    if (letra == 'A' ||letra == 'E' ||letra == 'I' || letra =='O' || letra == 'U' ){
        res.innerHTML = `<p>A letra <span class="mark">${letra}</span> é uma <span class="mark">vogal.</span></p>`
    } else {
        res.innerHTML = `<p>A letra <span class="mark">${letra}</span> é uma <span class="mark">consoante.</span></p>`
    }

    if (letra == '' ){
        res.innerHTML = `Por favor, insira uma letra antes de enviar!`
    }

}
