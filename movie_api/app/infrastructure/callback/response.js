module.exports = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
        };

        try {
            const HttpResponse = await controller(httpRequest);
            res.status(HttpResponse.statusCode).send(HttpResponse.body);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: 'Internal Server Error.' });
        }
    }
};