const NanoId = require("../utils/nanoId")
const {Url} = require("../module/urls")


const handleGetLink = async (req,res) =>{
    if(!req.params.shortId) return res.status(400).json({status:"ShortId parameter required"})
    const url = await Url.findOneAndUpdate({shortId : req.params.shortId},{$push:
        {
            visitHistory : {
                timestamps : Date.now()
            }
        }})
    if(!url)
        return res.status(400).json({"status" : `${req.params.shortId} Not Found.`})
    return res.redirect(url.redirectUrl)

}

const handlePostLink = async (req,res) =>{
    const body = req.body;
    if(!body.url) return res.status(400).json({status:"Url is required!"})
    const shortId = NanoId(8)
    const url = await Url.create({ shortId: shortId, redirectUrl: body.url, visitHistory:[], })
    return res.status(200).json({"id" : url.shortId})
}


const handlePatchLink = async (req,res) =>{
    const body = req.body
    if(!req.params.shortId) return res.status(400).json({status:"ShortId parameter required"})
    if(!body.url) return res.status(400).json({status:"Url is required!"})
    const url = await Url.findOneAndUpdate({shortId:req.params.shortId},{$set:{
        redirectUrl : body.url
        }})
    if(!url)
        return res.status(400).json({"status" : `${req.params.shortId} Not Found.`})
    return res.status(200).json({"id" : url.shortId, "new redirect url": body.url})

}



const handleDeleteLink = async (req,res) =>{
    if(!req.params.shortId) return res.status(400).json({status:"ShortId parameter required"})
    const url = await Url.findOneAndDelete({shortId : req.params.shortId})
    if(!url)
        return res.status(400).json({"status" : `${req.params.shortId} Not Found.`})
    return res.status(200).json({"id" : url.shortId, status:"Deleted Successfully"})
}


const handleAnalytics = async (req,res) =>{
    if(!req.params.shortId) return res.status(400).json({status:"ShortId parameter required"})
    const url = await Url.findOne({shortId : req.params.shortId})
    const visitCount = url.visitHistory.length
    return res.status(200).json({"Total Visit Count": visitCount, Analytics : url.visitHistory})
}



module.exports = {handleGetLink, handlePatchLink, handlePostLink, handleDeleteLink, handleAnalytics}