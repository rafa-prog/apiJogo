import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Game from "../typeorm/entities/Game";
import GameRepository from "../typeorm/repositories/GameRepository";

interface IRequest {
    id: string
    name: string
    genre: string
    platform: string
    developer: string
    releaseDate: Date
    price: number
    description: string
    rate: number
}

export default class UpdateGameService {

    public async execute({id, name, genre, platform, developer, releaseDate, price, description, rate}: IRequest): Promise<Game> {

        const gameRepository = getCustomRepository(GameRepository)

        const game = await gameRepository.findOne(id)
        
        if(!game){
            throw new AppError('Game not found!')
        }

        const gameExists = await gameRepository.findByName(name)

        if(gameExists && name != game.name) {
            throw new AppError('There is already a game with this name!')
        }

        game.name = name
        game.genre = genre
        game.platform = platform
        game.developer = developer
        game.releaseDate = releaseDate
        game.price = price
        game.description = description
        game.rate = rate

        await gameRepository.save(game)

        return game
    }
}