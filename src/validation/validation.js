import Joi from '@hapi/joi'


export const addProductCateogyValidation = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    isActive:Joi.boolean().required()
})

export const editProductCateogyValidation = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    isActive: Joi.boolean().required()
})

export const deleteProductCateogyValidation = Joi.object({
    id: Joi.number().required(),
})