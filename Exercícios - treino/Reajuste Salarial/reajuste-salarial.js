function verificar(){
    var salariotxt = document.getElementById('salario')
    var salario = Number(salariotxt.value)
    var res = document.getElementById('res')
    
    if (salario <= 280){
        var aumento = 20
    } else if (salario <= 700){
        var aumento = 15
    } else if (salario <= 1500){
        var aumento = 10
    } else{
        var aumento = 5
    }
    res.innerHTML = `Salário antes do reajuste: ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`
    res.innerHTML += `Porcentagem de aumento: ${aumento}% <br>`
    res.innerHTML += `Valor do aumento (R$): ${((aumento/100)*salario).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`
    res.innerHTML += `Salário após o reajuste ${(((aumento/100)*salario)+salario).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`

}