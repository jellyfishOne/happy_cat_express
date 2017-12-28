
exports.index = function(req, res) {
	res.render('index', {title : 'Happy Cat (^_^)'});
};

// Display advice for picking the right kitten food
 exports.food_advice = function(req, res){
 	res.render('food_advice');
 };