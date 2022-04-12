exports.succes = (req, res, body, statusCode) => {
    const response = {
        error: false,
        status: statusCode || 200,
        body: body || ''
    };

    res.status(statusCode).send(response);
};

exports.error = (req, res, body, statusCode) => {

    const response = {
        error: true,
        status: statusCode || 500,
        body: body || 'Internal Server Error'
    };

    res.status(statusCode).send(response);
};