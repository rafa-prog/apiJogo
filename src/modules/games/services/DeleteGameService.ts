import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import GameRepository from "../typeorm/repositories/GameRepository";

interface IRequest {
    id: string
}

export default class DeleteGameService {

    public async execute({id}: IRequest): Promise<void> {

        const gameRepository = getCustomRepository(GameRepository)

        const game = await gameRepository.findOne(id)

        if(!game){
            throw new AppError('Game not found!')
        }

        await gameRepository.remove(game)
    }
}