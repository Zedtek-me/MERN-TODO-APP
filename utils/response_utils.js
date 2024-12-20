

class Response{
    constructor(message, status, data=Object){
        this.message = message
        this.status = status
        this.data = data
    }

    send(req, res){
        res.status(this.status).json(this)
    }
}


class SuccessResponse extends Response {
    constructor(message, status, data=Object){
        super(message, 200, data)
    }
}

class ErrorResponse extends Response {
    constructor(message, status, data=Object){
        super(message, 500, data)
    }
}

module.exports = {
    SuccessResponse,
    ErrorResponse
}
