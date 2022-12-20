import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import PlatformController from "../controllers/PlatformController";

const gameRouter = Router()
const gamesController = new PlatformController()


gameRouter.get('/', gamesController.index)

gameRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()}
}), gamesController.show)

gameRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        brand: Joi.string().required(),
        controller: Joi.string().required(),
        portable: Joi.boolean().required(),
        releaseDate: Joi.date().required(),
        description: Joi.string().required(),
        rate: Joi.number().required()
    }
}), gamesController.create)

gameRouter.put('/:id', celebrate({
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
}),gamesController.update)

gameRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()}
}), gamesController.delete)


export default gameRouter

// importar na routes -> index