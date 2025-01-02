function enviar(){
    var letra = document.getElementById('letra').value.toUpperCase()
    var res = document.getElementById('res')

    if (letra == 'A' ||letra == 'E' ||letra == 'I' || letra =='O' || letra == 'U' ){
        res.innerHTML = `<p>A letra <strong>${letra}</strong> é uma vogal</p>`
    } else {
        res.innerHTML = `<p>A letra <strong>${letra}</strong> é uma consoante</p>`
    }

    if (letra == '' ){
        res.innerHTML = `Por favor, insira uma letra antes de enviar!`
    }

    

}
