const express = require("express");
const _Auth = require("../../controllers/AuthApi");
const _DefaultRoutes = require("../../config/defaultRoutes");

const router = express.Router();

router.post(_DefaultRoutes.AUTHENTICATION.REGISTER, _Auth.register);
router.post(_DefaultRoutes.AUTHENTICATION.LOGIN, _Auth.login)

module.exports = router;
