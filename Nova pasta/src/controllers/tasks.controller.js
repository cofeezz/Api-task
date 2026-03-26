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

async function createTask(req, res) {
    const { title } = req.body

    if (!title || typeof title !== "string") {
        return res.status(400).send({
            message: "title é obrigatório e apenas letras"
        })
    }
}

async function updateTask(req, res) {
    const id = Number(req.parans.id)
    const { title } = req.body

    if (!Number.isFinite(id)){
        return res.status(400).send({
            message: "id invalido"
        })
    }

    if (!title || typeof title !== "string") {
        return res.status(400).send({
            mensage: "title é obrigatório e deve ser string"
        })
    }

    const [result] = pool.query("update task set title = ? where id = ?", [title, id])

    const [rows] = await pool.query("select id, title, created_at from tasks where id = ?", [result.insertId])

    return res.status(200).send({
        tasks: rows
    })
}

const [result] = await pool.query("insert into tasks (title) values (?)", [title])

const [rows] = await pool.query("select id, title, created_at from tasks where id = ?", [result.insertId])

return res.status(201).send({
    tasks: rows
})

async function deletTasks(req, res) {
    const id = Number(req.params.id)

    if (!Number.isFinite(id)) {
        return res.status(400).send({
            message: "id invalido"
        })
    }
    const [result] = await pool.query("delete from tasks where id = ?", [id])
    
    return res.status(400).send({
        message: "task deletado com sucesso"
    })
}

export {
    lsitTasks,
    getTask,
    createTask,
    updateTask,
}