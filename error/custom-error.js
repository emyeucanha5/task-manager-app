class CustomAPIError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

const createCustomError = (message,statusCode) => {
    console.log('hierror');
    return new CustomAPIError(message,statusCode);
}

module.exports = {CustomAPIError, createCustomError};