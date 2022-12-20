import { getCustomRepository } from "typeorm";
import Platform from "../typeorm/entities/Platform";
import PlatformRepository from "../typeorm/repositories/PlatformRepository";

export default class ListPlatformService {

    public async execute(): Promise<Platform[]> {

        const platformRepository = getCustomRepository(PlatformRepository)

        const platforms = await platformRepository.find()

        return platforms
    }
}