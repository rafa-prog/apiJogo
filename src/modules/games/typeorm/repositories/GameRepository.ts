import { EntityRepository, Repository } from "typeorm";
import Game from "../entities/Game";

@EntityRepository(Game)
export default class GameRepository extends Repository<Game> {
    public async findByName(name: string): Promise<Game | undefined> {
        const game = await this.findOne({
            where: { name }
        })

        return game
    }
}