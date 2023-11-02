const $menu = qs('.menu-lateral')
const $btnMenu = qs('.cabecalho__menu')
const $form = qs('#form-cadastro')
const $selectTipoDesconto = qs('#select-tipo-desconto')
const $labelDesconto = qs('#label-desconto')
const $inputDesconto = qs('#desconto-valor')
const $inputCodigoCupom = qs('#código-cupom')
const $gerarCodigo = qs('#gerar-codigo')
const $botoesTipoCupom = qsa('.tipo__cupom__botoes a')
const $toggleBotaoStatus = qs('.cadastro__toggle');
const $statusSpan = qs('#span-is-ativo');
const $todosInputsCadastro = qsa('.cadastro__form input, .cadastro__form select');
const $todosBotoes = qsa('.botao')
const $inputValorMin = qs('#valor-min')
const $inputDataLimite = qs('#data-limite')


$btnMenu.onclick = () => {
  $menu.classList.toggle('menu-lateral--ativo')
}

$selectTipoDesconto.onchange = () => {
  if($selectTipoDesconto.value == "fixo") {
    $labelDesconto.innerText = 'Qual o valor do desconto em reais?'
    $inputDesconto.placeholder = 'R$ 0,00'
    $inputDesconto.value = ''
  } else {
    $labelDesconto.innerText = 'Qual a porcentagem de desconto?'
    $inputDesconto.placeholder = '0%'
    $inputDesconto.value = ''
  }
}


$inputDesconto.oninput = (e) => {
  if($selectTipoDesconto.value == "fixo") {
    let valor = e.target.value.replace(/\D/g, '')
    valor = parseFloat(valor) / 100;
    if (valor !== '' && valor !== 0) {
      valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      $inputDesconto.value = valor;
    } else {
      $inputDesconto.value = '';
    }
  }
  else{
    let valor = e.target.value.replace(/\D/g, '')
    console.log(e)
    if (e.inputType === 'deleteContentBackward') {
      console.log(valor.slice(0, -1))
      valor = valor.slice(0, -1);
    }
    if(valor !== '' && valor !== 0) {
      $inputDesconto.value = valor + '%';
    }
    else{
      $inputDesconto.value = '';
    }
  }
}


$inputValorMin.oninput = (e) => {
  let valor = e.target.value.replace(/\D/g, '')
  valor = parseFloat(valor) / 100;
  if (valor !== '' && valor !== 0) {
    valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    $inputValorMin.value = valor;
  } else {
    $inputValorMin.value = '';
  }
}


$gerarCodigo.onclick = () => {
  const letras = 'abcdefghijklmnopqrstuvwxyz';
  let resultado = '';

  for (let i = 0; i < 5; i++) {
    const indiceAleatorio = Math.floor(Math.random() * letras.length);
    resultado += letras.charAt(indiceAleatorio);
  }

  $inputCodigoCupom.value = resultado.toUpperCase()
}


$botoesTipoCupom.forEach(botao => {
  botao.addEventListener('click', () => {
    
    $botoesTipoCupom.forEach(b => b.classList.remove('botao--ativo'));
    
    botao.classList.add('botao--ativo');
  });
});


const formatarData = (data) => {
  const dataISO = new Date(data);

  const dia = dataISO.getDate();
  const mes = dataISO.getMonth() + 1;
  const ano = dataISO.getFullYear();

  
  const dataFormatada = dia + "/" + mes + "/" + ano;

  return dataFormatada;
}


const gerarNumeroAleatorio = () => {
  const numeroAleatorio = Math.random();

  const numeroInteiro = Math.floor(numeroAleatorio * 10) + 1;

  return numeroInteiro;
}



$form.onsubmit = (e) => {
  e.preventDefault()
  let itemLocal = JSON.parse(localStorage.getItem('item')) || []
  
  const $botaoSelecionado = qs('.tipo__cupom__botoes a.botao--ativo')

  const tipo = $botaoSelecionado.dataset.tipo
  const codigo = $inputCodigoCupom.value
  const valorDesconto = $inputDesconto.value
  const valorMinimo = $inputValorMin.value
  const dataLimite = formatarData($inputDataLimite.value)

  const acaoAtual = {
    'codigo': codigo,
    'desconto': valorDesconto,
    'tipo': tipo,
    'pedMinimo': valorMinimo,
    'vezesUsado': gerarNumeroAleatorio(),
    'dataLimite': dataLimite,
    'status': 'Ativo'
  } 

  itemLocal.push(acaoAtual)

  localStorage.setItem('item', JSON.stringify(itemLocal))
  atualizarLista()
  $gerarCodigo.onclick()
  $inputValorMin.value = ''
  $inputDesconto.value = ''
  $inputDataLimite.value = ''
  
  showNotification('Cupom cadastrado!', 'success', 3500)
}
