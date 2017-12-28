
exports.index = function(req, res) {
	res.render('index', {title : 'Happy Cat (^_^)'});
};

// Display advice for introucing your new kitten to other pets
 exports.pets_advice = function(req, res){
 	res.render('pets_advice');
 };