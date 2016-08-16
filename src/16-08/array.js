var carros = [];

function adicionarCarro(ano,fabricante,modelo){
  var carro = {};
  carro.ano = document.getElementById('ano').value;
  carro.modelo = document.getElementById('modelo').value;
  carro.fabricante = document.getElementById('fabricante').value;

  carros.push(carro);
  alert('Carro adicionado com sucesso.');
}

function exibirCarro() {
  for (var i = 0; i < carros.length; i++) {
    alert(`ano ${carros[i].ano}, modelo ${carros[i].modelo}, fabricante ${carros[i].fabricante}`);
  }
}
