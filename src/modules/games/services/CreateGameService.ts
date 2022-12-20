import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Game from "../typeorm/entities/Game";
import GameRepository from "../typeorm/repositories/GameRepository";

interface IRequest {
    name: string
    genre: string
    platform: string
    developer: string
    releaseDate: Date
    price: number
    description: string
    rate: number
}

export default class CreateGameService {

    public async execute({name, genre, platform, developer, releaseDate, price, description, rate}: IRequest): Promise<Game> {

        const gameRepository = getCustomRepository(GameRepository)

        const gameExists = await gameRepository.findByName(name)
        
        if(gameExists instanceof Game) {
            throw new AppError('There is already a game with this name!')
        }

        const game = gameRepository.create({name, genre, platform, developer, releaseDate, price, description, rate})
        
        await gameRepository.save(game)

        return game
    }
}