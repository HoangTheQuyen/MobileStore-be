const express = require("express");
const router = express.Router();
const _DefaultRoutes = require("../config/defaultRoutes");
const _ProductAPI = require("../routes/api/ProductRouter");
const _AuthAPI = require("../routes/api/AuthRouter");

router.use(_DefaultRoutes.PRODUCT.ROOT, _ProductAPI);
router.use(_DefaultRoutes.AUTHENTICATION.ROOT, _AuthAPI);

module.exports = router;
