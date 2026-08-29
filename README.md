# 🎯 Desafio Target

Projeto desenvolvido como teste técnico para o processo seletivo de Estágio em Análise e Desenvolvimento (vaga 4084226) da **Target Sistemas**, em São Paulo. O desafio é composto por cinco questões independentes, cada uma resolvida em sua própria pasta, cobrindo lógica de programação, manipulação de dados em JavaScript e um exercício em C#.

## 📋 Questões

### Questão 1 — Análise de lógica
Resposta dissertativa (`questão 1.txt`) sobre o resultado de um trecho de código, indicando que, ao final do processamento, a variável `SOMA` assume o valor `91`.

### Questão 2 — Verificador de Fibonacci
Página web (`index.html` + `fibonacci.js` + `styles.css`) em que o usuário digita um número e a aplicação verifica se ele pertence à sequência de Fibonacci, exibindo o resultado na tela.

### Questão 3 — Relatório de Faturamento Diário
Página web que lê um conjunto de dados de faturamento diário (`faturamento.json`) e calcula, ao clicar em "Calcular": o menor e o maior valor de faturamento do período, a média mensal e a quantidade de dias com faturamento acima da média.

### Questão 4 — Percentual de Faturamento por Estado
Página web que calcula o percentual de participação de cada estado (SP, RJ, MG, ES, Outros) no faturamento total, exibindo o resultado em uma lista.

### Questão 5 — Inversor de String (C#)
Aplicação de console em C# (.NET 8) que recebe uma string digitada pelo usuário e retorna a mesma string invertida, implementada manualmente com troca de caracteres (sem usar métodos prontos de inversão).

## 🚀 Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| HTML5 / CSS3 | Estrutura e estilização das páginas das questões 2, 3 e 4 |
| JavaScript | Lógica das questões 2, 3 e 4 |
| C# (.NET 8) | Aplicação de console da questão 5 |
| JSON | Base de dados de faturamento usada na questão 3 |

## 🗄️ Estrutura de pastas

```
Desafio-Target/
├── Questão 1/    # Resposta textual de lógica de programação
├── Questão 2/    # Verificador de Fibonacci (HTML/CSS/JS)
├── Questão 3/    # Relatório de faturamento diário (HTML/CSS/JS)
├── Questão 4/    # Percentual de faturamento por estado (HTML/CSS/JS)
└── Questão 5/    # InverterStringApp — console app em C# (.NET 8)
```

## ▶️ Como executar

### Questões 2, 3 e 4 (HTML/JS)
Basta abrir o arquivo `index.html` de cada pasta diretamente no navegador (ou servir a pasta com uma extensão como Live Server).

### Questão 5 (C#)
Requer o [.NET 8 SDK](https://dotnet.microsoft.com/download) instalado.

```bash
cd "Questão 5/InverterStringApp"
dotnet run
```
