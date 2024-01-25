"use strict";

function gerarCPF() {
  var n = 9;
  var n1 = Math.floor(Math.random() * n) + 1;
  var n2 = Math.floor(Math.random() * n);
  var n3 = Math.floor(Math.random() * n);
  var n4 = Math.floor(Math.random() * n);
  var n5 = Math.floor(Math.random() * n);
  var n6 = Math.floor(Math.random() * n);
  var n7 = Math.floor(Math.random() * n);
  var n8 = Math.floor(Math.random() * n);
  var n9 = Math.floor(Math.random() * n);
  var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - d1 % 11;
  if (d1 >= 10) d1 = 0;
  var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - d2 % 11;
  if (d2 >= 10) d2 = 0;
  return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
}

function gerarDataNascimento() {
  var dataAtual = new Date();
  var anoNascimento = Math.floor(Math.random() * (dataAtual.getFullYear() - 1950 + 1)) + 1950;
  var mesNascimento = Math.floor(Math.random() * 12) + 1;
  var diaNascimento = Math.floor(Math.random() * 28) + 1; // Limitando a 28 para simplificar

  return "".concat(anoNascimento, "-").concat(mesNascimento < 10 ? '0' : '').concat(mesNascimento, "-").concat(diaNascimento < 10 ? '0' : '').concat(diaNascimento);
}

function gerarSexo() {
  return Math.random() < 0.5 ? 'Masculino' : 'Feminino';
}

function gerarNomesCpfDataSexo(quantidade) {
  var dadosFicticios = [];

  for (var i = 0; i < quantidade; i++) {
    var nome = "Nome".concat(i + 1);
    var cpf = gerarCPF();
    var dataNascimento = gerarDataNascimento();
    var sexo = gerarSexo();
    dadosFicticios.push({
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      sexo: sexo
    });
  }

  return dadosFicticios;
}

var dadosFicticios = gerarNomesCpfDataSexo(500);
console.log(dadosFicticios);