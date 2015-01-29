var TeamModel = global.db.model('TeamModel');
var async = require('async');

exports.getAllTeams = function(req, res, next) {
	TeamModel.findAllTeams(function(err, teams) {
			if (err) return next(err);
			if (!teams || teams.length === 0) return next(new Error("No team has been found"));
			res.status(200).send({status:200, result:teams});
	});
};

exports.getTeam = function(req, res, next) {
	var teamId  = req.params['id'];
	TeamModel.findByTeamId(teamId, function(err, team) {
		if (err) return next(err);
		if (!team) return next(new Error(teamId + " does not exist"));
		res.status(200).send({status: 200, result: team});
		return next();
	});
};
