import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Platform from "../typeorm/entities/Platform";
import PlatformRepository from "../typeorm/repositories/PlatformRepository";

interface IRequest {
    name: string
    brand: string
    controller: string
    portable: Boolean
    releaseDate: Date
    description: string
    rate: number
}

export default class CreatePlatformService {

    public async execute({name, brand, controller, portable, releaseDate, description, rate}: IRequest): Promise<Platform> {

        const platformRepository = getCustomRepository(PlatformRepository)

        const platformExists = await platformRepository.findByName(name)
        
        if(platformExists instanceof Platform) {
            throw new AppError('There is already a platform with this name!')
        }

        const platform = platformRepository.create({name, brand, controller, portable, releaseDate, description, rate})
        
        await platformRepository.save(platform)

        return platform
    }
}