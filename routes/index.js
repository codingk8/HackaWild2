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

/* GET Affichage de la page de mise à jour, qui donne la page de mise à jour des infos personnelles */
router.get('/miseajour', function(req, res, next) {
  res.render('update');
});

/* POST Prise en compte des informations d'inscription */
router.post('/', function(req, res, next) {
	connection.query('INSERT INTO wilders (prenom, nom, email, motdepasse, naissance, adresse, codepostal, ville) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [req.body.prenom, req.body.nom, req.body.email, req.body.motdepasse, req.body.naissance, req.body.adresse, req.body.codepostal, req.body.ville], function(error) {
		if (error) {
			console.log(error);
		} else {
			res.redirect('/confirmation');
		}
	});
});

/* GET Affichage de la page d'administration des données personnelles */


/* GET /admin/create
router.get('/create', function(req, res, next) {
	// Formulaire de création d'article
	res.render('admin-create');
}); */

module.exports = router;
