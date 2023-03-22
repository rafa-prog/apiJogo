
import { Request, Response } from "express";
import CreateGameService from "../services/CreateGameService";
import DeleteGameService from "../services/DeleteGameService";
import ListGameService from "../services/ListGameService";
import ShowGameService from "../services/ShowGameService";
import UpdateGameService from "../services/UpdateGameService";

export default class GamesController {
    public async index(resquest: Request, response: Response): Promise<Response> {

       const listGames = new ListGameService() 
       const games = await listGames.execute()

       return response.json(games)
    }

    public async show(resquest: Request, response: Response): Promise<Response> {

        const { id } = resquest.params
        const showGame = new ShowGameService() 
        const games = await showGame.execute({ id })
 
        return response.json(games)
    }

    public async create(resquest: Request, response: Response): Promise<Response> {

        const { name, genre, developer, releaseDate, price, description, rate } = resquest.body
        const createGame = new CreateGameService()
        const games = await createGame.execute({ name, genre, developer, releaseDate, price, description, rate })
 
        return response.json(games)
    }

    public async update(resquest: Request, response: Response): Promise<Response> {

        const { id } = resquest.params
        const { name, genre, developer, releaseDate, price, description, rate } = resquest.body
        const updateGame = new UpdateGameService() 
        const games = await updateGame.execute({ id, name, genre, developer, releaseDate, price, description, rate })
 
        return response.json(games)
    }

    public async delete(resquest: Request, response: Response): Promise<Response> {

        const { id } = resquest.params
        const deleteGame = new DeleteGameService() 
        await deleteGame.execute({ id })
 
        return response.json([])
    }
}