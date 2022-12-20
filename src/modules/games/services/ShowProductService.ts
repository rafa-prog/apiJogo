import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Game from "../typeorm/entities/Game";
import GameRepository from "../typeorm/repositories/GameRepository";

interface IRequest {
    id: string
}

export default class ShowGameService {

    public async execute({id}: IRequest): Promise<Game> {

        const gameRepository = getCustomRepository(GameRepository)

        const game = await gameRepository.findOne(id)

        if(!game){
            throw new AppError('Game not found!')
        }

        return game
    }
}