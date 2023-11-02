const $bodyTable = qs('#bodyTable')
const $botaoSalvar = qs('#salvarAlteracoes')


let listaAtual = JSON.parse(localStorage.getItem('item'))

const adicionarTabela = (valores) => {
  $bodyTable.innerHTML = ''
  for(let linha of valores){
    let novaLinha = ce('tr')
    for(let item of linha){
      let novoItem = ce('td')

      novoItem.innerHTML = item
      novoItem.classList.add('itensTable')
      novaLinha.appendChild(novoItem)
    }

    // ADICIONANDO SWITCH
    let itemSwitch = ce('td')
    itemSwitch.classList.add('itensTable')
    let labelSwitch = ce('label')
    labelSwitch.classList.add('switch')
    let inputCheckbox = ce('input')
    inputCheckbox.setAttribute('type', 'checkbox')
    if(linha[linha.length - 1] == 'Ativo'){
      inputCheckbox.checked = true
    }
    inputCheckbox.dataset.codigo = linha[0]
    inputCheckbox.onclick = (e) => {
      atualizarItem(e)
    }
    let spanSlider = ce('span')
    spanSlider.classList.add('slider')
    labelSwitch.appendChild(inputCheckbox)
    labelSwitch.appendChild(spanSlider)
    itemSwitch.appendChild(labelSwitch)
    novaLinha.appendChild(itemSwitch)

    // ADICIONANDO LIXEIRA
    let itemLixeira = ce('td')
    itemLixeira.classList.add('itensTable')
    let lixeira = ce('a')
    lixeira.classList.add('fa-solid', 'fa-trash-can')
    lixeira.dataset.codigo = linha[0]
    lixeira.onclick = (e) => {
      removerItem(e)
    }
    itemLixeira.appendChild(lixeira)
    novaLinha.appendChild(itemLixeira)
    $bodyTable.appendChild(novaLinha)
  }
}


const atualizarItem = (e) => {
  let codigoAlterado = e.target.dataset.codigo
  let isAtivo = e.target.checked ? 'Ativo' : 'Inativo'

  for (let item of listaAtual) {
    if (item.codigo == codigoAlterado) {
      item.status = isAtivo
    }
  }
  $botaoSalvar.classList.add('botao--ativo')
}


const removerItem = (e) => {
  let codigoRemovido = e.target.dataset.codigo
  let index = 0
  for (let item of listaAtual) {
    if (item.codigo == codigoRemovido) {
      listaAtual.splice(index, 1)
    }
    index++
  }
  $botaoSalvar.classList.add('botao--ativo')
  retornaDados(listaAtual)
}



$botaoSalvar.onclick = () => {
  localStorage.setItem('item', JSON.stringify(listaAtual))
  $botaoSalvar.classList.remove('botao--ativo')
  atualizarLista()
}


const retornaDados = async(lista) => {
  let arrCompleto = []

  const listaOrdenada = ordenarListaPorData(lista);
  for(let item of listaOrdenada){
    let dados = []

    dados.push(item.codigo)
    dados.push(item.desconto)
    dados.push(item.tipo)
    dados.push(item.pedMinimo)
    dados.push(item.vezesUsado)
    dados.push(item.dataLimite)
    dados.push(item.status)
    arrCompleto.push(dados)
  }
  
  adicionarTabela(arrCompleto)
}


function converterDataParaISO(data) {
  if (/\d{4}-\d{2}-\d{2}/.test(data)) {
    return data;
  } else {
    const partes = data.split('/');
    if (partes.length === 3) {
      return partes[2] + '-' + partes[1] + '-' + partes[0];
    }
  }
}


const ordenarListaPorData = (lista) => {
  const novaLista = lista.sort((a, b) => {
    const dataA = converterDataParaISO(a.dataLimite);
    const dataB = converterDataParaISO(b.dataLimite);
    return new Date(dataA) - new Date(dataB);
  });

  return novaLista;
}



const atualizarLista = async() => {
  listaAtual = JSON.parse(localStorage.getItem('item'))
  if (listaAtual == undefined){
    return
  } 

  $gerarCodigo.onclick()
  retornaDados(listaAtual)
  contarCodigosGeralEUnico()
}

atualizarLista()

