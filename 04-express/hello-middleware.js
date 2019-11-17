

module.exports = function(name) {
    return function(req, res) {
        res.send(`hello ${name}`)
    }
}
