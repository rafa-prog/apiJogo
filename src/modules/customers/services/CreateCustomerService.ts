import AppError from "src/shared/errors/appError";
import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomerRepository";

interface IRequest {
    name: string
    email: string
}

export default class CreateCustomersService {
    public async execute({name, email}: IRequest): Promise<Customer> {
        const customersRepository = getCustomRepository(CustomerRepository)
        const emailExists = await customersRepository.findByEmail(email)

        if(emailExists) {
            throw new AppError('Email already used.')
        }

        const customer = customersRepository.create({name, email})

        await customersRepository.save(customer)

        return customer
    }
}