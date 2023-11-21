/*const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');*/

import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
app.use(cors())
const port = 3000;

// Configuração do MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'MTS'
});

// Conectar ao MySQL
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.message);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Middleware para analisar dados do corpo da solicitação
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Rota para lidar com o cadastro
app.post('/cadastrar', (req, res) => {
  const { nome, cpf, senha } = req.body;
 console.log(req.body)
  const sql = 'INSERT INTO usuarios (nome, cpf, senha) VALUES (?, ?, ?)';
  const values = [nome, cpf, senha];

  // Executar a consulta SQL
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário: ' + err.message);
      res.status(500).send('Erro ao cadastrar usuário');
    } else {
      console.log('Usuário cadastrado com sucesso');
      res.status(200).send('Usuário cadastrado com sucesso');
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});


