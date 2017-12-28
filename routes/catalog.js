var express = require('express');
var router = express.Router();

// Require controller modules
var take_home_controller = require('../controllers/takeHomeController');
var vet_visit_controller = require('../controllers/vetVisitController');
var food_controller = require('../controllers/foodController');
var pets_controller = require('../controllers/petsController');
var tips_controller = require('../controllers/tipsController');

// BRINING KITTEN HOME ROUTES //

/* GET catalog home page. */
router.get('/', take_home_controller.index);

/* GET request for brining a kitten home. */
router.get('/home', take_home_controller.take_home_advice);

// FIRST VISTI TO THE VET ROUTES //
router.get('/vet', vet_visit_controller.vet_visit_advice);

// PICKING THE RIGHT FOOD ROUTES //
router.get('/food', food_controller.food_advice);

// INTRODUCING TO OTHER PETS ROUTES //
router.get('/pets', pets_controller.pets_advice);

// GENERAL TIPS ROUTES //
router.get('/tips', tips_controller.tips_advice);



module.exports = router;