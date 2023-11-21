function cadastrar() {

  var nome = document.getElementById('nome-input').value;
  var cpf = document.getElementById('cpf-input').value;
  var senha = document.getElementById('senha-input').value;

  if (cpf === '' || senha === '' || nome === '') {
    alert('Por favor, preencha todos os campos antes de cadastrar.');
  } else {
    // Redirecionar para a página desejada após o cadastro bem-sucedido
    fetch('http://localhost:3000/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, cpf, senha }),
    }).then(data => {
      console.log('Resposta do servidor:', data);
      // Trate a resposta do servidor conforme necessário
      var link = 'https://umjovemprogramador.github.io/mts-login/'; 
      window.location.href = link;

    })
    .catch(error => {
      console.error('Erro ao enviar dados para o servidor:', error);
    });

    
  }
}

function login() {

  var cpf = document.getElementById('cpf-input').value;
  var senha = document.getElementById('senha-input').value;

  if (cpf=== '' || senha === '') {
    alert('Por favor, preencha todos os campos antes de cadastrar.');
  } else {
    // Redirecionar para a página desejada após o cadastro bem-sucedido
    var link = 'https://umjovemprogramador.github.io/MTS-2.0/'; 
    window.location.href = link;
  }
}

