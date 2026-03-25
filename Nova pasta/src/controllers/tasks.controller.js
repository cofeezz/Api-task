import { pool } from "../../db.js";

export async function lsitTasks(req, res) {
    const [rows] = await pool.query("select id, title, created_at from tasks")

    return res.status(200).send(rows)
}

export async function getTask(req, res) {
    const id = Number(req.params.id)
    console.log(id);

    if (!Number.isFinite(id)) {
        return res.status(400).send({
            mensage: "id invalido",
        })
    }
    const [rows] = await pool.query("select id, title, created_at from tasks where id = ?", [id])
    console.log(rows);
}