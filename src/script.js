//Criação de objetos
var jogador1 = {
  nome: 'Jogador1'
  , vitorias: 0
  , empates: 0
  , derrotas: 0
  , pontos: 0
}

var jogador2 = {
  nome: 'Jogador2'
  , vitorias: 0
  , empates: 0
  , derrotas: 0
  , pontos: 0
}

var jogador3 = {
  nome: 'Jogador3'
  , vitorias: 0
  , empates: 0
  , derrotas: 0
  , pontos: 0
}

//Pegando os elementos da tabela
var elementoTabela = document.getElementById("tabelaJogadores");
exibirTela();

//Mostrar as pontuações ao clicar
function exibirTela () {
  elementoTabela.innerHTML = `
    <tr>
      <td>${jogador1.nome}</td>
      <td>${jogador1.vitorias}</td>
      <td>${jogador1.empates}</td>
      <td>${jogador1.derrotas}</td>
      <td>${jogador1.pontos}</td>
      <td><button onClick="adicionarVitoria(jogador1)">Vitória</button></td>
      <td><button onClick="adicionarEmpate(jogador1)">Empate</button></td>
      <td><button onClick="adicionarDerrota(jogador1)">Derrota</button></td>
    </tr>
    <tr>
      <td>${jogador2.nome}</td>
      <td>${jogador2.vitorias}</td>
      <td>${jogador2.empates}</td>
      <td>${jogador2.derrotas}</td>
      <td>${jogador2.pontos}</td>
      <td><button onClick="adicionarVitoria(jogador2)">Vitória</button></td>
      <td><button onClick="adicionarEmpate(jogador2)">Empate</button></td>
      <td><button onClick="adicionarDerrota(jogador2)">Derrota</button></td>
    </tr>
    <tr>
      <td>${jogador3.nome}</td>
      <td>${jogador3.vitorias}</td>
      <td>${jogador3.empates}</td>
      <td>${jogador3.derrotas}</td>
      <td>${jogador3.pontos}</td>
      <td><button onClick="adicionarVitoria(jogador3)">Vitória</button></td>
      <td><button onClick="adicionarEmpate(jogador3)">Empate</button></td>
      <td><button onClick="adicionarDerrota(jogador3)">Derrota</button></td>
    </tr>
  `;
}

//Adicionando vitoria ao clicar
function adicionarVitoria(jogador) {
  jogador.vitorias++;
  jogador.pontos += 3;
  exibirTela();
}

//Adicionando empate ao clicar
function adicionarEmpate(jogador) {
  jogador.empates++;
  jogador.pontos++;
  exibirTela();
}

//Adicionando derrota ao clicar
function adicionarDerrota(jogador) {
  jogador.derrotas++;
  exibirTela();
}