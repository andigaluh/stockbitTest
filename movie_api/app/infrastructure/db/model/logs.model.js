module.exports = (sequelize, Sequelize) => {
    const Logs = sequelize.define("logs", {
        endpoint: {
            type: Sequelize.STRING
        },
        params: {
            type: Sequelize.STRING
        }
    });

    return Logs;
};