// Anasite - Edits: setting up routes
const express = require("express");
//  const controller = require('../../../controllers/front/university.controller')
const controller = require("../../../controllers/front/interestedprogram.controller");
const router = express.Router();
const multer = require("multer");
const upload = multer();
router.route("/create").post(upload.any(), controller.createInterestedProgram);
router.route("/listInterestedPrograms").get(controller.listInterestedPrograms);
router.route("/edit").put(controller.edit);
router.route("/delete/:id").delete(controller.delete);
router.route("/get/:id").get(controller.get);
// router.findAll();

module.exports = router;
