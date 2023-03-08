import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomerRepository";

interface IRequest {
    id: string,
    name: string,
    email: string
}

export default class UpdateCustomersService {
    public async execute({id,name, email}: IRequest): Promise<Customer> {
        const customersRepository = getCustomRepository(CustomerRepository)
        const customer = await customersRepository.findById(id)

        if(!customer) {
            throw new AppError('Customer not found.')
        }

        const customerExistis = await customersRepository.findByEmail(email)

        if(customerExistis && email!==customer.email) {
            throw new AppError('There is already one user with this email.')
        }

        customer.name = name
        customer.email = email

        await customersRepository.save(customer)

        return customer
    }
}