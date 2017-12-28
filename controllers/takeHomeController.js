

exports.index = function(req, res) {
	res.render('index', {title : 'Happy Cat (^_^)'});
};

// Display advice for taking a new kitten home
 exports.take_home_advice = function(req, res){
 	res.render('take_home_advice');
 };