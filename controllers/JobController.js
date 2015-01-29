var JobModel = global.db.model('JobModel');
var TeamModel = global.db.model('TeamModel');
var settings = require('../config/default.js')
var async = require('async');
var request = require('request');

// Jobs need to be scheduled
exports.clearAllJobs = function(callback) {
	JobModel.update({}, {active: true, update_date: new Date()}, {multi: true}, function(err, rowsAffected) {
		return callback(err);
	});
};

exports.getAllTeams = function(callback) {
	var options = {
		url: settings.apiBase+'/nba/teams.json',
		headers: {'User-Agent':settings.userAgent},
		json: true,
		gzip: true
	};

	request.get(options, function(err, response, body) {
		if (err) return callback(err, null);
		if (body && body instanceof Array) {
			TeamModel.upinsertAllTeams(body, function(err) {
					if (err) return callback(err);
					JobModel.completeJobWithJobId('a', function(err, job) {
						return callback(err);
					});
			});
		}
	});
};

exports.getAssistLeaders = function(callback) {
	var options = {
		url: settings.apiBase+'/nba/leaders/assists_per_game.json',
		headers: {'User-Agent':settings.userAgent, 'Authorization': ' Bearer ' + settings.token},
		json: true,
		gzip: true
	};

	request.get(options, function(err, response, body) {
		if (err) return callback(err, null);
		console.log(body);
		if (body && body instanceof Array) {
		}
	});

}

// Jobs extra methods
exports.completeJobWithJobId = function(jobId, callback) {
	JobModel.completeJobWithJobId(jobId, function(err, job) {
		return callback(err);
	});
};
