const connection = require ('../database/connection');

module.exports = {

    async index (resquest, response){

        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('org', org_id)
        .select ('*');
        return response.json(incidents);
    }

}