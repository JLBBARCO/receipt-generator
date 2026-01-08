document.getElementById("reciboForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const main = document.querySelector("main");
  const aside = document.querySelector("aside");
  const reciboDetails = document.getElementById("reciboDetails");

  aside.style.display = "block"; // Exibe o painel do recibo
  reciboDetails.style.display = "block"; // Exibe os detalhes do recibo
  main.style.gridArea = "2 / 1 / 3 / 2"; // Ajusta o layout para duas colunas

  var nomeCliente = document.getElementById("nomeCliente").value.trim();
  var valorRaw = document.getElementById("valor").value;
  var descricao = document.getElementById("descricao").value.trim();
  var motivo = document.getElementById("motivo").value.trim();
  var cidade = document.getElementById("cidade").value.trim();
  const validade = document.getElementById("validade").value;
  const dataRodape = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Formata o valor para o padrão brasileiro (parse seguro e formatação com separador de milhares)
  var valorNum = Number(valorRaw.toString().replace(",", "."));
  if (isNaN(valorNum) || valorNum <= 0) {
    alert("Por favor, informe um valor válido maior que zero.");
    return;
  }
  var valorFormatted = valorNum.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  var validadeFormatada = "";
  if (validade) {
    validadeFormatada = new Date(validade).toLocaleDateString("pt-BR");
  }

  reciboDetails.innerHTML = `
    <h1>Recibo</h1>
    <p>
        Recebemos de ${nomeCliente} a quantia de
        R$ ${valorFormatted} referente a
        ${descricao} com vencimento em
        ${validadeFormatada} do
        ${motivo}.
    </p>
    <div id="assinaturas">
        <p>Para maior clareza, declaro e assino o presente.</p>
        <p>_________________________<br />
        Assinatura do Fornecedor</p>
        <p>_________________________<br />
        Assinatura do Cliente</p>
    </div>
    <div id="rodape">
        <p id="dataRodape">
            ${cidade}, ${dataRodape}
        </p>
    </div>
    `;

  document.getElementById("reciboForm").reset();
});
