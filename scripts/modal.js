const $infoCadastro = qs('#info-cadastro')
const $infoLista = qs("#info-lista")
const $infoGrafico = qs("#info-grafico")

const $modal = qs("#myModal");
const $span = qs(".close__modal");
const $tituloModal = qs(".modal-header h2");
const $modalBody = qs("#modal-body")

$infoCadastro.onclick = () => {
  $modal.style.display = "block";

  $tituloModal.innerHTML = 'Cadastro de Cupons';
  $modalBody.innerHTML = `
    <p>Aqui você cadastra todos os seus cupons, basta preencher todos os campos e clicar no botão "Cadastrar Cupom".</p>
    <ul class="modal__ul">
      <li><span class="bold">Cupom de Uso Único:</span> é o cupom que só pode ser usado uma vez e você poderá oferece-lo para seus clientes.</li>
      <li><span class="bold">Cupom Geral:</span> é o cupom que você pode divulgar nas redes socias ou em panfletos para atingir vários clientes de uma só vez.</li>
    </ul>
    <p>Além disso, você pode selecionar se o desconto será fixo ou porcentagem, o valor do desconto, sua data limite e tambem se o pedido deve ter um valor mínimo.</p>
  `
}


$infoLista.onclick = () => {
  $modal.style.display = "block";

  $tituloModal.innerHTML = 'Cupons Cadastrados';
  $modalBody.innerHTML = `
    <ul class="modal__ul">
      <li>Aqui, você terá acesso a todas as informações relacionadas aos seus cupons. Além disso, você tem a opção de ativar ou desativar cupons individualmente e até mesmo remover aqueles que considerar desnecessários.</li>
      <li>Após efetuar quaisquer alterações, lembre-se de clicar no botão "Salvar" para garantir que nenhuma modificação seja perdida.</li>
    </ul>
  `
}


$infoGrafico.onclick = () => {
  $modal.style.display = "block";

  $tituloModal.innerHTML = 'Gráficos';
  $modalBody.innerHTML = `
    <ul class="modal__ul">
      <li>Aprimorando a clareza, oferecemos um gráfico de pizza que facilita a visualização da distribuição de tipos de cupons, incluindo Cupom Geral e Cupom de Uso Único.</li>
      <li>Para um controle mais eficaz, disponibilizamos um gráfico de linha que apresenta dados sobre a quantidade de cupons usados diariamente. Isso permite uma análise detalhada do uso ao longo do tempo.</li>
    </ul>
  `
}


$span.onclick = () => {
  $modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
}

