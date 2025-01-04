function enviar(){
    var turno = document.getElementById('turno').value
    var res = document.getElementById('res')

    if(turno == 'M' || turno == 'm'){
        res.innerHTML = `Bom dia!`
    } else if(turno == 'V' || turno == 'v'){
        res.innerHTML = `Boa tarde!`
    } else if(turno == 'N' || turno == 'n'){
        res.innerHTML = `Boa noite!`
    } else {
        res.innerHTML = `!Por favor insira um valor válido!`
    }
}