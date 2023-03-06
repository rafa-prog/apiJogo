import AppError from "src/shared/errors/appError"
import { compare } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import User from "../typeorm/entities/User"
import UsersRepository from "../typeorm/repositories/UsersRepository"
import { sign } from "jsonwebtoken"
import authConfig from "@config/auth"

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: User
    token: string
}

export default class CreateSessionService {
    public async execute({email, password}: IRequest): Promise<IResponse> {

        const usersRepository = getCustomRepository(UsersRepository)

        const user = await usersRepository.findByEmail(email)

        if(!user) {
            throw new AppError('Invalid email/password combination', 401)
        }

        const passwordConfirmed = await compare(password, user.password)

        if(!passwordConfirmed) {
            throw new AppError('Invalid email/password combination', 401)
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id,
            expiresIn: authConfig.jwt.expiresIn
        })

        return {user, token}
    }
}