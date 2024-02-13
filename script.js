document.getElementById("submit").onclick = function calcular() {
  mostrarResultado();
};

function gerarMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  
  const media = (nota1 + nota2 + nota3) / 3;
  return media.toFixed(2);
}

function mostrarResultado(){
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("d-none");
  resultado.innerHTML = "A média das notas é: " + gerarMedia();
}
