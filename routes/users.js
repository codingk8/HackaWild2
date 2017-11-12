/* Appel des modules */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');

/* Connection à la BDD */
const connection = mysql.createConnection(config);

connection.connect();

/* GET Affichage de la page de login, qui fonctionne */
router.get('/login', function (req, res, next) {
	res.render('login');
});

/* POST Gestion du login */
router.post('/login', function(req, res, next) {
    let fail = '';
	let email = req.body.login;
	let password = req.body.password;
	connection.query(`select * from users where email="${email}" and motdepasse="${password}";`, 
        function (error, results, fields){
        if (results.length==0) {
			res.send('erreur');
		} else {
			req.session.connected=true;
			res.redirect('/wilderstogether');
		}
	});
});

//* A quoi ça sert ce truc ? page log */
router.get('/logged', function(req, res, next) {
    if(req.session.connected){
        res.redirect('/wilderstogether');
    }else{
        res.redirect('/login');
    }
});

/* GET Process de déconnection Même question, à quoi ça sert ?*/
router.get("/admin-logout", function(req, res, next) {
    req.session.connected=false;
    res.redirect('/login');
  });


/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

module.exports = router;
