// @desc        Get all bootcamps
// @route       Get /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json( { 
        success: true,
        msg: 'Show all bootcamps'
    })
}

// @desc        Get a single bootcamps
// @route       Get /api/v1/bootcamp/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json( { 
        success: true,
        msg: 'Show a single bootcamps'
    })
}