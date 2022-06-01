const User = require('../models/user')

exports.getUser = (req, res, next) => {
    User.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
};

exports.addUser = (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    User.create({
        name: name,
        age: age,
        email: email
    }).then(() => {
        console.log("user added");
        res.status(201).send({
            data: "user created",
            user: {
                        name: name, age: age, email: email
                    }
        })
    })
};

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(user => {
            user.destroy();
        })
        .then(() => {
            res.status(200).send({
                data: "user deleted",
            })
        })
};