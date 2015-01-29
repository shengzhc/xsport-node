var inputValidator = {};

inputValidator.getAllTeams = function(req, res, next) {
	return next();
};

inputValidator.getTeam = function(req, res, next) {
	if (req.params['id']) return next();
	return next(new Error("TeamId is missing in Route"));
};

module.exports = inputValidator;
