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

export default {
    conflictError,
    notFound,
    unprocessableEntity
}