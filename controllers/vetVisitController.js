
exports.index = function(req, res) {
	res.render('index', {title : 'Happy Cat (^_^)'});
};

// Display advice for visiting a vet for the first time
 exports.vet_visit_advice = function(req, res){
 	res.render('vet_visit_advice');
 };