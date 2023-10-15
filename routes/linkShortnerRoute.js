const express = require("express");
const router = express.Router()

const { handleGetLink, handlePatchLink, handlePostLink, handleDeleteLink, handleAnalytics } = require("../controllers/linkShortnerHandler");

router.route("/:shortId")
.get(handleGetLink)
.patch(handlePatchLink)
.delete(handleDeleteLink)

router.post("/",handlePostLink)

router.get("/analytics/:shortId",handleAnalytics)

module.exports = router;