import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Platform from "../typeorm/entities/Platform";
import PlatformRepository from "../typeorm/repositories/PlatformRepository";

interface IRequest {
    id: string
    name: string
    brand: string
    controller: string
    portable: Boolean
    releaseDate: Date
    description: string
    rate: number
}

export default class UpdatePlatformService {

    public async execute({id, name, brand, controller, portable, releaseDate, description, rate}: IRequest): Promise<Platform> {
        console.log(id)
        const platformRepository = getCustomRepository(PlatformRepository)

        const platform = await platformRepository.findOne(id)
        
        if(!platform){
            throw new AppError('Platform not found!')
        }

        const platformExists = await platformRepository.findByName(name)

        if(platformExists && name != platform.name) {
            throw new AppError('There is already a platform with this name!')
        }

        platform.name = name
        platform.brand = brand
        platform.controller = controller
        platform.portable = portable
        platform.releaseDate = releaseDate
        platform.description = description
        platform.rate = rate

        await platformRepository.save(platform)

        return platform
    }
}