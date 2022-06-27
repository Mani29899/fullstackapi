import express from 'express';
import { routeMethodOptions } from '../app/processRoutes.js'
import productCategoryArray from '../app/productCatgory/index.js'




let productCategoryRouter = express.Router();
if (productCategoryArray && productCategoryArray.length > 0) {
    productCategoryRouter = routeMethodOptions(productCategoryRouter, productCategoryArray)
} else {
    console.error('There is o employee Routes Configuered')
}






export {productCategoryRouter}