import CustomerRepository from "@modules/customers/typeorm/repositories/CustomerRepository"
import GameRepository from "@modules/games/typeorm/repositories/GameRepository"
import AppError from "src/shared/errors/appError"
import { getCustomRepository } from "typeorm"
import Order from "../typeorm/entities/Order"
import OrderRepository from "../typeorm/repositories/OrderRepository"

interface IGame {
    id: string
    price: number
}

interface IRequest {
    customer_id: string
    games: IGame[]
}


export default class CreateOrderService {

    public async execute({customer_id, games}: IRequest): Promise<Order> {
        const ordersRepository = getCustomRepository(OrderRepository)
        const customerRepository = getCustomRepository(CustomerRepository)
        const gameRepository = getCustomRepository(GameRepository)

        const customerExists = await customerRepository.findById(customer_id)

        if(!customerExists) {
            throw new AppError('Could not find any customer')
        }

        const existsGames = await gameRepository.findAllByIds(games)

        if(!existsGames.length) {
            throw new AppError('Could not find any game')
        }

        const existsGamesIds = existsGames.map((game) => game.id)
        const checkInesistentGames = games.filter(
            game => !existsGamesIds.includes(game.id)
        )

        if(!existsGamesIds.length) {
            throw new AppError(`Could not find game ${checkInesistentGames[0].id}`)
        }

        const serializerGames = games.map(game => ({
            game_id: game.id,
            price: existsGames.filter(prod => prod.id === game.id)[0].price
        }))

        const order = await ordersRepository.createOrder({
            customer: customerExists,
            games: serializerGames
        })

        return order

    }

}