// all modules

const express = require("express");
// const { route } = require("./university.route");
const universityRoutes = require("./university.route");
const programmeRoutes = require("./programme.route");
const leadRoutes = require("./lead.route");
const applicantsRoute = require("./applicants.route");
const usersRoute = require("./users.route");
const backupsRoutes = require("./backups.route");
const PropertiesRoutes = require("./properties.route");
const currencieRoutes = require("./currencies.route");
const activitiesRoutes = require("./activities.route");
const branchRoutes = require("./branch.route");
// Anasite - Edits
const programLevel = require("./programlevel.route");
const programCategory = require("./programcategory.route");
const qualificationType = require("./qualificationtype.route");
const universityType = require("./universitytype.route");
const leadGroup = require("./leadgroup.route");
const interestedProgram = require("./interestedprogram.route");
const applicationModuleStatus = require("./applicationmodulestatus.route");
const leadsManagmentModuleStatus = require("./leadsmanagmentmodulestatus.route");
const invoiceModuleStatus = require("./invoicemodulestatus.route");
const commissionInvoice = require("./commissioninvoice.route");

const router = express.Router();

/**
 * GET v1/status
 */
router.use("/branch", branchRoutes);
router.use("/backups", backupsRoutes);
router.use("/properties", PropertiesRoutes);
router.use("/university", universityRoutes);
router.use("/programme", programmeRoutes);
router.use("/lead", leadRoutes);
router.use("/applicants", applicantsRoute);
router.use("/users", usersRoute);
router.use("/currencies", currencieRoutes);
router.use("/activities", activitiesRoutes);
// Anasite - Edits:
router.use("/programlevel", programLevel);
router.use("/programcategory", programCategory);
router.use("/qualificationtype", qualificationType);
router.use("/universitytype", universityType);
router.use("/leadgroup", leadGroup);
router.use("/interestedprogram", interestedProgram);
router.use("/applicationmodulestatus", applicationModuleStatus);
router.use("/leadsmanagmentmodulestatus", leadsManagmentModuleStatus);
router.use("/invoicemodulestatus", invoiceModuleStatus);
router.use("/commissioninvoice", commissionInvoice);

// currencieRoutes;
module.exports = router;
