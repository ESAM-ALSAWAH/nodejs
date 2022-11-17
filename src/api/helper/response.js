exports.getSuccess = ({message, data}) => {
    return {
        success: true,
        code: 200,
        message: message ?? 'successed',
        data:data??[]

    }
}
exports.CreateSuccess = ({message, data}) => {
    return {
        success: true,
        code: 201,
        message: message ?? 'successed',
        data:data??[]

    }
}