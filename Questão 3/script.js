async function calcularFaturamento() {
    const response = await fetch('faturamento.json');
    const dados = await response.json();

    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    dados.forEach(dia => {
        if (dia.valor > 0) { 
            if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
            if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;
            somaFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = somaFaturamento / diasComFaturamento;

    const diasAcimaDaMedia = dados.filter(dia => dia.valor > mediaMensal).length;

    const resultado = `
        <p>Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}</p>
        <p>Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}</p>
        <p>Número de dias com faturamento acima da média: ${diasAcimaDaMedia}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
}
