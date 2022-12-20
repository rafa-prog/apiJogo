import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Game from "../typeorm/entities/Game";
import GameRepository from "../typeorm/repositories/GameRepository";

interface IRequest {
    name: string
    genre: string
    platform: string
    developer: string
    price: number
    description: string
    rate: number
}

export default class CreateGameService {

    public async execute({name, genre, platform, developer, price, description, rate}: IRequest): Promise<Game> {

        const gameRepository = getCustomRepository(GameRepository)

        const gameExists = await gameRepository.findByName(name)

        if(gameExists) {
            throw new AppError('There is already a game one product with this name!')
        }

        const game = gameRepository.create({name, genre, platform, developer, price, description, rate})
        
        await gameRepository.save(game)

        return game
    }
}