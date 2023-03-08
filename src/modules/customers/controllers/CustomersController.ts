import { Request, Response } from "express";
import CreateCustomersService from "../services/CreateCustomerService";
import DeleteCustomersService from "../services/DeleteCustomerService";
import ListCustomersService from "../services/ListCustomersService";
import ShowCustomersService from "../services/ShowCustomerService";
import UpdateCustomersService from "../services/UpdateCustomerService";

export default class CustomersController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listCustomers = new ListCustomersService()
        const customers = await listCustomers.execute()

        return response.json(customers)
    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const showCustomers = new ShowCustomersService()
        const customers = await showCustomers.execute({id})

        return response.json(customers)
    }

    public async create(request: Request, response: Response): Promise<Response> {

        const { name, email } = request.body
        const createCustomers = new CreateCustomersService()
        const customers = await createCustomers.execute({name, email})

        return response.json(customers)
    }

    public async update(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const { name, email } = request.body
        const updateCustomers = new UpdateCustomersService()
        const customers = await updateCustomers.execute({id, name, email})

        return response.json(customers)
    }

    public async delete(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const deleteCustomers = new DeleteCustomersService()
        
        await deleteCustomers.execute({id})

        return response.json([])
    }
}