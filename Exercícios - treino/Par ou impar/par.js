function verificar(){
    var n = Number(document.getElementById('n').value)
    var res = document.getElementById('res')

    if (n%2 == 0){
        res.innerHTML = `O número inserido é par`
    } else {
        res.innerHTML = `O número inserido é ímpar`
    }
}