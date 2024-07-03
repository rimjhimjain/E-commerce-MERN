const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandling");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create product -- admin
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product  = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
});
//update product -- admin
exports.updateProduct = catchAsyncErrors(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
})


// get all products
exports.getAllProducts = catchAsyncErrors(async(req,res) => {
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
})

//get product dedtails
exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }
    res.status(200).json({
        success:true,
        message:"Product not found."
    });
})

    

// delete product
exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        });
    }

    await product.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success:true,
        message:"Product deleted successfully."
    });
});