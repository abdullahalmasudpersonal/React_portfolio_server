const ErrorHandler = (err, req, res, next) => {
    res.send(err.message)
};

module.exports = ErrorHandler;