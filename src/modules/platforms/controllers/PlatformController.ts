import CreatePlatformService from "../services/CreatePlatformService";
import ListPlatformService from "../services/ListPlatformService";
import ShowPlatformService from "../services/ShowPlatformService";
import UpdatePlatformService from "../services/UpdatePlatformService";
import DeletePlatformService from "../services/DeletePlatformService";
import { Request, Response } from "express";



export default class PlatformController {
    public async index(resquest: Request, response: Response): Promise<Response> {

       const listPlatform = new ListPlatformService() 
       const platforms = await listPlatform.execute()
       return response.json(platforms)
    }

    public async show(resquest: Request, response: Response): Promise<Response> {

        const { id } = resquest.params
        const showPlatforms = new ShowPlatformService() 
        const platforms = await showPlatforms.execute({ id })
        
        return response.json(platforms)
    }

    public async create(resquest: Request, response: Response): Promise<Response> {
        const {name, brand, controller, portable, releaseDate, description, rate} = resquest.body
        const createPlatform = new CreatePlatformService() 
        const platforms = await createPlatform.execute({name, brand, controller, portable, releaseDate, description, rate})
        return response.json(platforms)
    }

    public async update(resquest: Request, response: Response): Promise<Response> {

        const { id } = resquest.params
        console.log(id)
        const {name, brand, controller, portable, releaseDate, description, rate} = resquest.body
        const updatePlatforms = new UpdatePlatformService() 
        const platforms = await updatePlatforms.execute({id, name, brand, controller, portable, releaseDate, description, rate})
 
        return response.json(platforms)
    }

    public async delete(resquest: Request, response: Response): Promise<Response> {

        const { id } = resquest.params
        const deletePlatform = new DeletePlatformService() 
        await deletePlatform.execute({ id })
 
        return response.json([])
    }
}