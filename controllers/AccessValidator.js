var accessValidator = {'tokens': {}};

function isTokenValid(req, callback) {
    return callback(null);
}

accessValidator.getAllTeams = function(req, res, next) {
    isTokenValid(req, function(err) {
        return next(err);
    });
};

accessValidator.getTeam = function(req, res, next) {
    isTokenValid(req, function(err) {
        return next(err);
    });
};

module.exports = accessValidator;
