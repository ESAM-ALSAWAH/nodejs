
module.exports = async (model, page, limit) => {
    const total = await model.countDocuments();
    return {
        page,
        limit,
        total,
        pages:Math.ceil(total / parseInt(limit)),
        nextPage: total > (+page * parseInt(limit)) ? true : false
    }
}