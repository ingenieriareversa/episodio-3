const log = require("debug")("command-controller");

module.exports = (commands) => async (req, res, next) => {
    const { request } = req.body;
    const { entity, operation, parameters } = request;

    log("Incoming request: %o", request);
    const commandResult = await commands[entity][operation](parameters);
    const jsonResponse = {
        request,
        response: commandResult
    };
    log("Outgoing response: %o", jsonResponse)

    res.json(jsonResponse);
}