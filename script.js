const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo')

function calcular(operador) {
    var valor1 = parseFloat(document.getElementById('n1').value);
    var valor2 = parseFloat(document.getElementById('n2').value);
    var resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                alert("Não é possível dividir por zero!");
                return;
            }
            break;
        default:
            alert("Operação inválida!");
            return;
    }

    alert("O resultado é: " + resultado);
}

const relogio = setInterval(function time (){
     let horaAtual = new Date();
     let hr = horaAtual.getHours();
     let min = horaAtual.getMinutes();
     let sec = horaAtual.getSeconds();

    if (hr <10) hr = '0' + hr
    if (min <10) min = '0' + min
    if (sec <10) sec = '0' + sec

    hora.innerHTML = hr
    minuto.textContent = min
    segundo.innerText = sec
})
