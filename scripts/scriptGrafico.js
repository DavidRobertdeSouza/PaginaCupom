const $divGraficoPizza = qs('.div__grafico--pizza')
const $divGraficoLinha = qs('.div__grafico--linha')

const contarCodigosGeralEUnico = () => {
  const valorLista = JSON.parse(localStorage.getItem('item'))
  let contadorGeral = 0;
  let contadorUnico = 0;

  valorLista.forEach(item => {
    if (item.tipo === "Geral") {
      contadorGeral++;
    } else {
      contadorUnico++;
    }
  });

  criarGraficoPizza(contadorUnico, contadorGeral)
  criarGraficoLinha()
}


const criarGraficoPizza = (qtdUnico, qtdGeral) => {
  $divGraficoPizza.innerHTML = ''
  const $ctx = ce('canvas')
  $divGraficoPizza.appendChild($ctx)
  $ctx.classList.add('grafico__canvas')

  new Chart($ctx, {
    type: 'doughnut',
    data: {
      labels: ['Geral', 'Único'],
      datasets: [{
        label: 'Tipos de Cupons',
        data: [qtdGeral, qtdUnico],
        backgroundColor: [
          'rgb(255, 78, 80)',
          'rgb(249, 149, 35)'
        ],
        hoverOffset: 4
      }]
    },
    options: {
      plugins: {
          title: {
              display: true,
              text: 'Tipos de Cupons',
              font: {
                  size: 20
              }
          }
      }
  }
  });
}


const tratarValores = () => {
  const valorLista = JSON.parse(localStorage.getItem('item'))
  const usosPorDia = {};
  
  for (const uso of valorLista) {
    const data = uso.dataLimite; // Suponhamos que a data está armazenada em uma propriedade 'data' do objeto de uso.
    const quantidade = uso.vezesUsado; // Suponhamos que a quantidade de uso está armazenada em uma propriedade 'quantidade' do objeto de uso.

    if (usosPorDia[data]) {
      usosPorDia[data] += quantidade;
    } else {
      usosPorDia[data] = quantidade;
    }
  }
  
  const datas = Object.keys(usosPorDia);
  const quantidades = Object.values(usosPorDia);
  
  return [quantidades, datas];
}



const criarGraficoLinha = () => {
  $divGraficoLinha.innerHTML = ''
  const $ctx = ce('canvas')
  $divGraficoLinha.appendChild($ctx)
  $ctx.classList.add('grafico__canvas')

  const labels = tratarValores()[1]
  const data = tratarValores()[0]


  new Chart($ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Qtd de Uso',
        data: data,
        fill: false,
        borderColor: 'rgb(243, 75, 33)',
        tension: 0.1
      }]
    },
    options: {
      plugins: {
          title: {
              display: true,
              text: 'Qtd de Uso',
              font: {
                  size: 20
              }
          }
      }
    }
  });
}