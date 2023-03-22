import PlatformRepository from "@modules/platforms/typeorm/repositories/PlatformRepository";
import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Game from "../typeorm/entities/Game";
import GameRepository from "../typeorm/repositories/GameRepository";

interface IRequest {
    id: string
    name: string
    genre: string
    platform_id: string
    developer: string
    releaseDate: Date
    price: number
    description: string
    rate: number
}

export default class UpdateGameService {

    public async execute({id, name, genre, platform_id, developer, releaseDate, price, description, rate}: IRequest): Promise<Game> {

        const gameRepository = getCustomRepository(GameRepository)

        const game = await gameRepository.findOne(id)
        
        if(!game){
            throw new AppError('Game not found!')
        }

        const gameExists = await gameRepository.findByNameAndPlatform(name, platform_id)

        console.log(gameExists)

        if(gameExists && (gameExists.id != id)) {
            throw new AppError('There is already a game with this name and platform!')
        }

        const platformRepository = getCustomRepository(PlatformRepository)

        const platformExists = await platformRepository.findById(platform_id)

        if(!platformExists) {
            throw new AppError('Platform not found!')
        }

        game.name = name
        game.genre = genre
        game.platform_id = platform_id
        game.developer = developer
        game.releaseDate = releaseDate
        game.price = price
        game.description = description
        game.rate = rate

        await gameRepository.save(game)

        return game
    }
}