const db = require("../db/index");
const Logs = db.logs;

module.exports = async (req, res, next) => {
    let query = JSON.stringify(req.query);
    await Logs.create({
        endpoint: req.path,
        params: query
    });
    next();
}; 
