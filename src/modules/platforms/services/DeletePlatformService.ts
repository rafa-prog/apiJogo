import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import PlatformRepository from "../typeorm/repositories/PlatformRepository";

interface IRequest {
    id: string
}

export default class DeletePlatformService {

    public async execute({id}: IRequest): Promise<void> {

        const platformRepository = getCustomRepository(PlatformRepository)

        const platform = await platformRepository.findOne(id)

        if(!platform){
            throw new AppError('Platform not found!')
        }

        await platformRepository.remove(platform)
    }
}