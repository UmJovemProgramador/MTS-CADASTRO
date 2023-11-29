function cadastrar() {

  var nome = document.getElementById('nome-input').value;
  var cpf = document.getElementById('cpf-input').value;
  var senha = document.getElementById('senha-input').value;

  if (cpf === '' || senha === '' || nome === '') {
    alert('Por favor, preencha todos os campos antes de cadastrar.');
  } else {
    // Redirecionar para a página desejada após o cadastro bem-sucedido
    var link = '../../login.html'; 
    window.location.href = link;

  }
}

function login() {

  var cpf = document.getElementById('cpf-input').value;
  var senha = document.getElementById('senha-input').value;

  if (cpf=== '' || senha === '') {
    alert('Por favor, preencha todos os campos antes de cadastrar.');
  } else {
    // Redirecionar para a página desejada após o cadastro bem-sucedido
    var link = ''; 
    window.location.href = link;
  }
}
