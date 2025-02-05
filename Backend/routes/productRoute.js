const express = require("express");
const { getAllProducts , createProduct, updateProduct, deleteProduct, getProductDetails} = require("../controlers/productController");


const router = express.Router();
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").get(getProductDetails);
module.exports = router