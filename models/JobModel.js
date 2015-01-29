var mongoose = require('mongoose');

var jobModel = mongoose.Schema({
	job_id: {type: String, required: true, unique: true},
	loop: {type: Boolean, default: false},
	active: {type: Boolean, default: false},
	function: String,
	update_date: {type: Date, default: Date.now}
}, {collection:'jobs'});

jobModel.statics.findJobWithJobId = function(jobId, callback) {
	this.findOne({job_id: jobId}, function(err, job) {
		if (err) return callback(err, null);
		return callback(null, job);
	});
};

jobModel.statics.completeJobWithJobId = function(jobId, callback) {
	this.findOneAndUpdate({job_id: jobId}, {active: false}, function(err, job) {
		if (err) return callback(err, null);
		return callback(null, job);
	});
};

module.exports = jobModel;
