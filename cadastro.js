function cadastrar() {
  var nome = document.getElementById('name-input').value;
  var email = document.getElementById('email-input').value;
  var idade = document.getElementById('age-input').value;

  if (nome === '' || email === '' || idade === '') {
    alert('Por favor, preencha todos os campos antes de cadastrar.');
  } else if (idade < 0 || idade > 150) {
    alert('Idade inválida.');
  } else if (idade < 18) {
    alert('Você ainda não possui idade suficiente.');
  } else {
    var link = 'https://umjovemprogramador.github.io/MTS-2.0/'; //Colocar link aonde o botão cadastre-se deve levar
    window.location.href = link;
  }
}
