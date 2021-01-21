const { Todo } = require('../db/models');

class TodoController {
    static async get(req, res) {
        const data = await Todo.findAll({
            order: [
                ['id', 'ASC']
            ]
        });
        res.render('pages/index.ejs', { data: data });
    }

    static async getById(req, res) {
        const data = await Todo.findByPk(req.params['id']);
        res.json(data);
    }

    static async create(req, res) {
        res.render('pages/create.ejs');
    }

    static async store(req, res) {
        await Todo.create(req.body);
        res.redirect('/todos');
    }

    static async edit(req, res) {
        const data = await Todo.findByPk(req.params['id']);
        res.render('pages/edit.ejs', { data: data });
    }

    static async update(req, res) {
        await Todo.update(req.body, {
            where: {
                id: req.params['id']
            }
        });
        res.redirect('/todos');
    }

    static async delete(req, res) {
        const data = await Todo.destroy({
            where: {
                id: req.params['id']
            }
        });
        // 
        res.redirect('/todos');
    }

    static async getStatus(req, res) {
        const data = await Todo.findAll({
            where: {
                status: req.params['status']
            }
        });
        res.json(data);
    }
}

module.exports = TodoController;
