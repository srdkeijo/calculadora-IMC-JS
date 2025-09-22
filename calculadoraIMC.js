const imc = (peso,altura) => peso / (altura * altura);
const situacao = (valor_imc) => {
    if (valor_imc < 18.5)
        return "Abaixo do peso";
    else if (valor_imc < 25)
        return "Peso ideal (você está ótimo!)";
    else if (valor_imc < 30)
        return "Levemente acima do peso (cuidado!)";
    else if (valor_imc < 35)
        return "Obesidade de grau I";
    else if (valor_imc < 40)
        return "Obesidade de grau II (severa)";
    else
        return "Obesidade de grau III (mórbida)";
}