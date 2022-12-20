import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import PlatformController from "../controllers/PlatformController";

const PlatformRouter = Router()
const platfomController = new PlatformController()


PlatformRouter.get('/', platfomController.index)

PlatformRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()}
}), platfomController.show)

PlatformRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        brand: Joi.string().required(),
        controller: Joi.string().required(),
        portable: Joi.boolean().required(),
        releaseDate: Joi.date().required(),
        description: Joi.string().required(),
        rate: Joi.number().required()
    }
}), platfomController.create)

PlatformRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()},
    [Segments.BODY]: {
        name: Joi.string().required(),
        brand: Joi.string().required(),
        controller: Joi.string().required(),
        portable: Joi.boolean().required(),
        releaseDate: Joi.date().required(),
        description: Joi.string().required(),
        rate: Joi.number().required()
    }
}),platfomController.update)

PlatformRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()}
}), platfomController.delete)


export default PlatformRouter

// importar na routes -> index