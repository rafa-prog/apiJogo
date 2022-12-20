import { getCustomRepository } from "typeorm";
import Game from "../typeorm/entities/Game";
import GameRepository from "../typeorm/repositories/GameRepository";

export default class ListGameService {

    public async execute(): Promise<Game[]> {

        const gameRepository = getCustomRepository(GameRepository)

        const games = await gameRepository.find()

        return games
    }
}