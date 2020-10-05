const db = require('../db');
exports.getWaifus = async (req,res) => {
    const results = await db.query("select * from waifus");
    console.log(results)
    return res.status(200).json({
        status: 'success',
        data: {
            waifu: results.rows,
        }
    })
}

exports.getWaifu = (req,res) => {
    console.log(req.params.waifuid);
    return res.status(200).json({
        status: 'sucuess',
        data: {
            waifu: 'Kirino'
        }
    })
}

exports.addWaifu = (req,res) => {
    console.log(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            waifu: req.body.name
        }
    })
}

exports.updateWaifu = (req,res) => {
    console.log(req.params.id);
    console.log(req.body)
    res.status(200).json({
        status: 'success',
        data: {
            waifu: req.body.name
        }
    })
}

exports.deleteWaifu = (req,res) => {
    console.log(req.params.id);
    return res.status(204).json({
        status: 'Success'
    })
}