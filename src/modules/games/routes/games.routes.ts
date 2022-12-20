import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import GameController from "../controllers/GameController";

const gameRouter = Router()
const gamesController = new GameController()


gameRouter.get('/', gamesController.index)

gameRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()}
}), gamesController.show)

gameRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        genre: Joi.string().required(),
        platform: Joi.string().required(),
        developer: Joi.string().required(),
        releaseDate: Joi.date().required(),
        price: Joi.number().precision(2).required(),
        description: Joi.string().required(),
        rate: Joi.number().required()
    }
}), gamesController.create)

gameRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()},
    [Segments.BODY]: {
        name: Joi.string().required(),
        genre: Joi.string().required(),
        platform: Joi.string().required(),
        developer: Joi.string().required(),
        releaseDate: Joi.date().required(),
        price: Joi.number().precision(2).required(),
        description: Joi.string().required(),
        rate: Joi.number().required()
    }
}),gamesController.update)

gameRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()}
}), gamesController.delete)


export default gameRouter

// importar na routes -> index