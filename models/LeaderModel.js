var mongoose = require('mongoose');

var leaderModel = mongoose.Schema({
	stats_type: {type: String},
	ranking: [{
		last_name: String,
		first_name: String,
		display_name: String,
		rank: Number,
		value: Number,
		team: {
		}
	}],
	create_date: {type: Date, required: true}
}, {collection:'leaders'});

leaderModel.statics.upinsertLeaderBoard = function(type, leaderBoard, callback) {
	leaderBoard.session_type = type;
	this.findOneAndUpdate({stats_type: type, create_date: {$glt:}

	})
};
