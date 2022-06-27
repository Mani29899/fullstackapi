import Entity from '../../entity/index.js'
import responseHandler from '../../utill/responseHandler.js';
import Methods from './Methods.js';

class RoutesService {
    async getProductCategoryListService() {
        const methodName = Methods.GET_PRODUCT_CATEGORY_LIST;
        console.log(methodName);
        try {
            //  let productCategory = await Entity.ProductCategory.findOne({
            //      where: {
            //          id: 1
            //      }
            //  })

            let productCategory = await Entity.ProductCategory.findAll();
            return responseHandler.success(methodName, productCategory)
        } catch (error) {
            return responseHandler.failure(methodName, 'Sorry something went wrong ');
        }
    }

    async addProductCategoryListService(data) {
        const methodName = Methods.ADD_PRODUCT_CATEGOEY_LIST;
        console.log(methodName);
        try {
            const productCategoryDetails = await Entity.ProductCategory.create({
                title: data.title,
                description: data.description,
                isActive: data.isActive
            })
            console.log("productCategoryDetails", productCategoryDetails);
            if (!productCategoryDetails) {
                return responseHandler.forbidden(methodName, 'country id not found')
            }
            return responseHandler.success(methodName, productCategoryDetails)
        } catch (error) {
            console.log('hit comes')
            return responseHandler.failure(methodName, 'sorry something went wrong')
        }
    }

    async editProductCategoryListService(data, params) {
        const methodName = Methods.UPDATE_PRODUCT_CATEGORY_LIST;
        try {
            const productCategoryDetails = await Entity.ProductCategory.findOne({
                where: {
                    id: params.id
                }
            })
            console.log(data, 'body')
            if (!productCategoryDetails) {
                return responseHandler.forbidden(methodName, 'Id is not found,So we cannot update the value')
            }
            productCategoryDetails.update(Object.assign({}, data))
            return responseHandler.success(methodName, productCategoryDetails)
        } catch (error) {
            return responseHandler.failure(methodName, 'Sorry Something Went Wrong')
        }
    }

    async deleteProductCategoryListService(data, params) {
        const methodName = Methods.DELETE_PRODUCT_CATEGORY_LIST;
        try {
            const productCategoryDetails = await Entity.ProductCategory.findOne({
                where: {
                    id:params.id
                }
            })
            if (!productCategoryDetails) {
                return responseHandler.forbidden(methodName, 'Id is not found,So we cannot update the value')
            }
            data.isActive = 0;
            productCategoryDetails.update(Object.assign({}, data))
            return responseHandler.success(methodName,productCategoryDetails)
        } catch (error) {
            return responseHandler.failure(methodName ,'sorry went something wrong')
        }
    }
}

export default new RoutesService();