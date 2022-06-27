import httpResponse from '../../utill/HttpResponse.js';
import Methods from './Methods.js';
import service from './Services.js'
import {postRequestParser} from '../../utill/index.js'
import responseHandler from '../../utill/responseHandler.js';

class productCategory {
    async getProductCategoryList(req ,res) {
        const methodName = Methods.GET_PRODUCT_CATEGORY_LIST;
        console.log(methodName)
        try {
            console.log('recieved get productCategoryList');
            const response = await service.getProductCategoryListService();
            await httpResponse(res ,response)
        } catch (error) {
            console.log('error Hanlder', error)
            HttpResponse(res, ResponseHandler.failure(methodName))
        }
    }

    async addProductCategoryList(req, res) {
        const methodName = Methods.ADD_PRODUCT_CATEGOEY_LIST;
        try {
            // const data = postRequestParser(req.body)
            const data = req.body;
            console.log(data,'data')
            const response = await service.addProductCategoryListService(data);
            await httpResponse(res ,response)
        } catch (error) {
            console.log(error)
            httpResponse(res ,responseHandler.failure(methodName))
        }
    }

    async editProductCategoryList(req, res) {
        const methodName = Methods.UPDATE_PRODUCT_CATEGORY_LIST;
        try {
            const data = req.body;
            const params = req.params;
            console.log(params ,'params')
            const response = await service.editProductCategoryListService(data,params);
            await httpResponse(res ,response)
        } catch (error) {
            console.log(error)
            httpResponse(res ,responseHandler.failure(methodName))
        }
    }

    async deleteProductCategoryList(req, res) {
        const methodName = Methods.DELETE_PRODUCT_CATEGORY_LIST;
        try {
            const data = req.body;
            const params = req.params;
            const response = await service.deleteProductCategoryListService(data, params);
            await httpResponse(res ,response)
        } catch (error) {
            console.log(error)
            httpResponse(res ,responseHandler.failure(methodName))
        }
    }
}


export default new productCategory();
