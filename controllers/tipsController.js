
exports.index = function(req, res) {
	res.render('index', {title : 'Happy Cat (^_^)'});
};

// Display general tips for taking care of a new kitten
 exports.tips_advice = function(req, res){
 	res.render('tips_advice');
 };