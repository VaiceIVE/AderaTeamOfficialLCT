const db = require('../db')
class UserController
{
    async createUser(req, res)
    {
        const{name, lastname, lvl, job, pat} = req.body
        const newPerson = await db.query('INSERT INTO users (name, lastname, level, job, patronymic) values ($1, $2, $3, $4, $5) RETURNING *', [name, lastname, lvl, job, pat])
        res.json(newPerson.rows)
    }
    async getUsers(req, res)
    {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }
    async getOneUser(req, res)
    {
        const id = req.params.id
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id])
        res.json(user.rows)
    }
    async updateUser(req, res)
    {
        const {id, name, lastname, job} = req.body
        const user = await db.query(
            'UPDATE users set name = $1, lastname = $2, job = $4 WHERE id = $3 RETURNING *', 
            [name, lastname, id, job]
            )
        res.json(user.rows[0])

    }
    async deleteUser(req, res)
    {
        const id = req.params.id
        await db.query('DELETE FROM reginfo WHERE users_id = $1', [id])
        await db.query('DELETE FROM users_traits WHERE users_id = $1', [id])
        const user = await db.query('DELETE FROM users WHERE id = $1', [id])
        res.json(user.rows)
    }
    async findUser(req, res)
    {
        const query=req.params.query
        const users = await db.query(`SELECT * FROM users WHERE name = $1`, [query])
        res.json(users.rows)
    }
    async testUser(req, res)
    {
        res.setHeader('Content-type', 'text/json');
        res.json([{
            "id": 1,
            "name": "Test",
            "lastname": "User",
            "job": "Statist",
            "level": 1
        }])
    }
    async defaultUser(req, res)
    {
        const user = await db.query('SELECT * FROM users WHERE id = 1')
        res.json(user.rows[0])
    }
    async userReg(req, res)
    {

        console.log('Try to reg')
        const {username, email, phone, password, lvl, job} = req.body.user
        /*console.log(req.body)
        console.log(username)
        console.log(email)
        console.log(phone)
        console.log(password)
        console.log(lvl)
        console.log(job)*/
        const name = username.split(' ')
        if(!(await db.query('SELECT EXISTS( SELECT * FROM reginfo WHERE mail = $1)', [email])).rows[0].exists)
        {
            const newPerson = await db.query('INSERT INTO users(name, lastname, level, job, patronymic) values ($1, $2, $3, $4, $5) RETURNING *', [name[0], name[1], lvl, job, name[2]])
            const newid = newPerson.rows[0].id
            const user = await db.query('INSERT INTO reginfo(users_id, mail, phone, password) VALUES ($1, $2, $3, $4) RETURNING *', [newid, email, phone, password])
            res.json(user.rows[0])
        }
        else
        {
            res.json('Email already taken')
        }
    }
    async signIn(req, res)
    {
        const {mail,pass} = req.body
        if(await db.query('SELECT EXISTS(SELECT * FROM reginfo WHERE (mail, password) = ($1, $2))', [mail, pass]))
        {
            console.log('Someone logged in')
            res.json('ok')
        }
        else
        {
            res.json('wrong')
        }
    }

    async setTeam(req, res)
    {
        const {userid, teamid} = req.body
        const user = await db.query('UPDATE users SET teams_id = $1 WHERE id = $2', [teamid, userid])
        res.json(user.rows[0])
    }
        

    
}

module.exports = new UserController()