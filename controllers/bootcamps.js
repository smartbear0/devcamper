// @desc        Get all bootcamps
// @route       Get /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json( { 
        success: true,
        msg: 'Show all bootcamps'
    })
}

// @desc        Get a single bootcamp
// @route       Get /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json( { 
        success: true,
        msg: `Show bootcamp ${req.params.id}`
    })
} 

// @desc        Create a new bootcamp 
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json( { 
        success: true,
        msg: 'Create new bootcamp'
    })
} 

// @desc        Update existing bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json( { 
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    })
} 

// @desc        Delete a bootcamp
// @route       Delete /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json( { 
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    })
} 