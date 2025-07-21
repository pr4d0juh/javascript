function calcular(){
    var a = Number(document.getElementById('a').value)
    var b = Number(document.getElementById('b').value)
    var c = Number(document.getElementById('c').value)
    var res = document.getElementById('res')

    var delta = b**-4*a*c
    var raiz1 = (- b + Math.sqrt(delta) ) / 2 * a
    var raiz2 = (- b - Math.sqrt(delta) ) / 2 * a

    res.innerHTML = `Equação inserida: ${a}x² + ${b}x + ${c} = 0`
    res.innerHTML = `O valor de delta é: `
    res.innerHTML = `O valor das raízes são respectivamente: `
}