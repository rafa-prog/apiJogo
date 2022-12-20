import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Game from "../typeorm/entities/Platform";
import PlatformRepository from "../typeorm/repositories/PlatformRepository";

interface IRequest {
    id: string
}

export default class ShowGameService {

    public async execute({id}: IRequest): Promise<Game> {

        const platformRepository = getCustomRepository(PlatformRepository)

        const platform = await platformRepository.findOne(id)

        if(!platform){
            throw new AppError('Platform not found!')
        }

        return platform
    }
}