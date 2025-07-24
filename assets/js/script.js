document.getElementById("reciboForm").addEventListener("submit", function (e) {
  const recibo = document.getElementById("recibo");
  const reciboDetails = document.getElementById("reciboDetails");

  recibo.style.display = "block"; // Exibe o recibo
  reciboDetails.style.display = "flex"; // Exibe os detalhes do recibo

  e.preventDefault(); // Adicione esta linha para evitar o reload

  var nomeCliente = document.getElementById("nomeCliente").value;
  var valor = document.getElementById("valor").value;
  var descrição = document.getElementById("descrição").value;
  var motivo = document.getElementById("motivo").value;
  var cidade = document.getElementById("cidade").value;
  const validade = document.getElementById("validade").value;
  const dataRodapé = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  recibo.innerHTML = `
    <h1>Recibo</h1>
    <p>
        Recebemos de ${nomeCliente} a quantia de
        R$ ${valor} referente a
        ${descrição} com vencimento em
        ${validade} do
        ${motivo}.
    </p>
    <div id="assinaturas">
        <p>Para maior clareza, dato e assino o presente.</p>
        <p>_________________________<br />
        Assinatura do Fornecedor</p>
        <p>_________________________<br />
        Assinatura do Cliente</p>
    </div>
    <div id="Rodapé">
        <p id="dataRodapé">
            ${cidade}, ${dataRodapé}
        </p>
    </div>
    `;
});
