function calcular(){
    var mat = Number.parseFloat(document.getElementById('mat'))
    var port = Number.parseFloat(document.getElementById('port'))
    var res = document.getElementById('res')
    var media = (mat + port)/2

     res.innerHTML = `Sua nota em Português foi ${port}`
     res.innerHTML += `Sua nota em Matemática foi ${mat}`
     res.innerHTML += `Sua média foi ${media}`
     
}