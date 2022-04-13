const { response } = require('../../network/response');
const { requests } = require('../../models');

const requestLogger = async (req, res, next) => {
    try {
        const { ip } = req;
        const { artistName } = req.query
        console.log(`New request from ${ip}, inserting request into the database`);

        await requests.create({
            request_ip: ip,
            request_artist: artistName,
            request_date: new Date()
        });
    
        next();
    } catch(e) {
        console.log('[ERROR]', e);
        response.error(req, res, null, 500);
    }
};

module.exports = requestLogger;