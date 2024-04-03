import Sequelize from "sequelize";
import mysql from "../config/mysql.js";

const insertStatusAgent = async (req, res) => {
    console.log(req.body);
    const { user, status } = req.body;
    try {
        let sql = `INSERT INTO ocm_log_agentstatus (fecha, agent, estado, motivo, agentstatus, segundos, idgroup) VALUES (NOW(), '${user}', '${status}', '', NULL, 0, -1)`;

        let result = await mysql.query(sql, {
            type: Sequelize.QueryTypes.INSERT
        });

        res.json({
            data: result,
            status: 200,
            message: "Estatus del agente insertado correctamente"
        });
    } catch (error) {
        console.error(error);
    }
}

export {
    insertStatusAgent
}
