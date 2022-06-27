import { mediaType } from "../../config/constants.js";
import Handler from "./Handler.js";
import requestValidator from '../../middlewares/requestValidatore.js'
import Methods from "./Methods.js";
import { addProductCateogyValidation, deleteProductCateogyValidation, editProductCateogyValidation } from "../../validation/validation.js";


export default [
    {
        path: '/list',
        type: mediaType.GET,
        method: Handler.getProductCategoryList,
        options:{}
    },
    {
        path: '/list/add',
        type: mediaType.POST,
        middleware: [requestValidator(Methods.ADD_PRODUCT_CATEGOEY_LIST, addProductCateogyValidation)],
        method: Handler.addProductCategoryList,
        options:{}
    },
    {
        path: '/list/edit/:id',
        type: mediaType.PUT,
        middleware: [requestValidator(Methods.UPDATE_PRODUCT_CATEGORY_LIST, editProductCateogyValidation)],
        method: Handler.editProductCategoryList,
        options:{}
    },
    {
        path: '/list/delete/:id',
        type: mediaType.DELETE,
        middleware: [requestValidator(Methods.DELETE_PRODUCT_CATEGORY_LIST, deleteProductCateogyValidation)],
        method: Handler.deleteProductCategoryList,
        options:{}
    }
]