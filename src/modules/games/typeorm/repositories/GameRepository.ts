import { EntityRepository, In, Repository } from "typeorm";
import Game from "../entities/Game";

interface IFindGame {
    id: string
}

@EntityRepository(Game)
export default class GameRepository extends Repository<Game> {
    public async findByName(name: string): Promise<Game | undefined> {
        const game = await this.findOne({
            where: { name }
        })

        return game
    }

    public async findByNameAndPlatform(name: string, platform_id: string): Promise<Game | undefined> {
        const game = await this.findOne({
            where: { name, platform_id }
        })

        return game
    }

    public async findAllByIds(games: IFindGame[]): Promise<Game[]> {
        const gamesIds = games.map(game => game.id)
        const existsGames = await this.find({
            where: { id: In(gamesIds)}
        })

        return existsGames
    }
}