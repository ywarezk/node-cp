

class ParentStrategyInterface {
    init(req) {
        throw new Error('not implemented');
    }
}

class ChildStrategy extends ParentStrategyInterface {
    init(req) {
        // do something
        req.user = 'Yariv'
    }
}

function middlewareCreator(strategy) {
    return function(req, res) {
        strategy.init(req)
    }
}