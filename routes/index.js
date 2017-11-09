const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection(config);

connection.connect();

/* GET Affichage de la page d'inscription avec le formulaire, qui fonctionne */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Affichage de la page de confirmation d'inscription ou de mise à jour, qui fonctionne */
router.get('/confirmation', function(req, res, next) {
  res.render('confirm');
});

/* GET Affichage de la page d'erreur 404, qui fonctionne */
router.get('/erreur404', function(req, res, next) {
  res.render('error');
});

/* GET Affichage de la page de login, qui fonctionne */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET Affichage de la page de visualisation */
router.get('/wilderstogether', function(req, res, next) {
  res.render('wilders');
});

/* GET Affichage de la page de mise à jour, qui donne une 404 pour l'instant */
router.get('/miseajour', function(req, res, next) {
  res.render('update');
});

/* GET /admin/create
router.get('/create', function(req, res, next) {
	// Formulaire de création d'article
	res.render('admin-create');
}); */

module.exports = router;
