const { Todo } = require('../db/models');

class TodoController {
    static async get(req, res) {
        const data = await Todo.findAll();
        res.json(data);
    }

    static async getById(req, res) {
        const data = await Todo.findByPk(req.params['id']);
        res.json(data);
    }

    static async create(req, res) {
        const data = await Todo.create(req.body);
        res.json(data);
    }

    static async update(req, res) {
        const data = await Todo.update(req.body, {
            where: {
                id: req.params['id']
            }
        });
        console.log(data);
        if (data) {
            const get = await Todo.findByPk(req.params['id']);
            res.json(get);
        }
        return res.json('Failed Insertion!');
    }

    static async delete(req, res) {
        const data = await Todo.destroy({
            where: {
                id: req.params['id']
            }
        });
        if (data) {
            return res.json('Data Successfully Deleted');
        } else {
            return res.json('Data Not Found');
        }

    }
}

module.exports = TodoController;
