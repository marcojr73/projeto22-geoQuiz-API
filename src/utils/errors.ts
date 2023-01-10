function conflictError(message?: string){
    return {
        status: 409,
        message
    }
}

function notFound(message?: string){
    return {
        status: 404,
        message
    }
}

function unprocessableEntity(message?: string){
    return {
        status: 422,
        message
    }
}

function forbidden(message?: string){
    return {
        status: 403,
        message
    }
}

function unauthorized(message?: string){
    return {
        status: 401,
        message
    }
}

export default {
    conflictError,
    notFound,
    unprocessableEntity,
    forbidden,
    unauthorized
}