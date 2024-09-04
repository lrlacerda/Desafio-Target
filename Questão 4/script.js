function calcularPercentuais() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    const percentuais = {};
    for (let estado in faturamento) {
        percentuais[estado] = (faturamento[estado] / total * 100).toFixed(2);
    }

    let resultado = "<ul>";
    for (let estado in percentuais) {
        resultado += `<li>${estado}: ${percentuais[estado]}%</li>`;
    }
    resultado += "</ul>";

    document.getElementById("resultado").innerHTML = resultado;
}
