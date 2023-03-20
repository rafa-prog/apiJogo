import Customer from "@modules/customers/typeorm/entities/Customer";
import Order from "@modules/orders/typeorm/entities/Order";
import { EntityRepository, Repository } from "typeorm";

interface IGame {
    game_id: string
    price: number
}

interface IRequest {
    customer: Customer
    games: IGame[]
}

@EntityRepository(Order)
export default class OrderRepository extends Repository<Order> {
    public async findById(id: string): Promise<Order | undefined> {
        const order = await this.findOne(id, {
            relations: ['order_games', 'customer']
        })

        return order
    }

    public async createOrder({customer, games}: IRequest): Promise<Order> {
        const order = this.create({customer, order_games: games})
        await this.save(order)
        return order
    }
}