const express = require("express");
const _Product = require("../../controllers/ProductApi");
const _DefaultRoutes = require("../../config/defaultRoutes");

const router = express.Router();

router.post(_DefaultRoutes.PRODUCT.GET_ALL, _Product.getAll);
router.post(_DefaultRoutes.PRODUCT.CREATE, _Product.createOne);
router.post(_DefaultRoutes.PRODUCT.GET_ONE, _Product.getOne);

module.exports = router;
