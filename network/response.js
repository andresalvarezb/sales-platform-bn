exports.success = function (req, res, message, status) {
    res.status(status || 200).send(message);
};

exports.error = function (req, res, message, status, details) {
    console.error('[Response errors]', details);
    res.status(status || 500).send({'error': message});
};
