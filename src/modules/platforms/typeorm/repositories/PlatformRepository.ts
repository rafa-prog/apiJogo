import { EntityRepository, Repository } from "typeorm";
import Platform from "../entities/Platform";

@EntityRepository(Platform)
export default class PlatformRepository extends Repository<Platform> {
    public async findByName(name: string): Promise<Platform | undefined> {
        const platform = await this.findOne({
            where: { name }
        })

        return platform
    }

    public async findById(id: string): Promise<Platform | undefined> {
        const platform = await this.findOne({
            where: { id }
        })

        return platform
    }
}