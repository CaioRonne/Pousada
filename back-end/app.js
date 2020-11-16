var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbusuario = process.env.USUARIO
const dbchave = process.CHAVE
const dbnome = process.env.NOME

db(`mongodb+srv://${dbusuario}:${dbchave}@pousada.wmoqx.mongodb.net/${dbnome}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const reserva = require('./routes/reserva')
app.use('/reserva', reserva)

const funcionario = require('./routes/funcionario')
app.use('/funcionario', funcionario)

const quarto = require('./routes/quarto')
app.use('/quarto', quarto)

module.exports = app;
