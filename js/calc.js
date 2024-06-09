function calc(valog, perce){
    const valdes= (valog*perce)/100;
    return valdes;
}

function calqvalfin(valog, des){
    const valfin= valog-des
}

function show(prod, valds, valfnl){
    const prodres= document.getElementById('prodRes')
    const valdes= document.getElementById('valDes')
    const valfin= document.getElementById('valFin')

    prodres.textContent= `Nome do produto: ${prod}`
    valdes.textContent= `Valor de desconto: ${valds.toFixed(2)}R$`
    valfin.textContent= `Valor de final: ${valfnl.toFixed(2)}R$`

}

function pegaVal(){
    const prod= document.getElementById('prod')
    const val= document.getElementById('valor')
    const desc= document.getElementById('desc')

    show(prod.value, calc(val.value, desc.value), val.value-calc(val.value, desc.value))
}

function limpar() {
    document.getElementById('prod').value = null;
    document.getElementById('valor').value = null;
    document.getElementById('desc').value = null;

    document.getElementById('prodRes').textContent= "Nome do produto:"
    document.getElementById('valDes').textContent= "Valor de desconto:"
    document.getElementById('valFin').textContent= "Valor final:"
}


