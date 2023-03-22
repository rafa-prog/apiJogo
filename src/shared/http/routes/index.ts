import gameRouter from "@modules/games/routes/games.routes";
import passwordRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/profile.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRouter from "@modules/users/routes/users.routes";
import customersRouter from "@modules/customers/routes/customer.routes";
import orderRouter from "@modules/orders/routes/orders_routes";
import platformsRouter from "@modules/platforms/routes/platforms.routes";
import { Router } from "express";

const routes = Router()

routes.use('/games', gameRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/profile', profileRouter)
routes.use('/customers', customersRouter)
routes.use('/orders', orderRouter)
routes.use('/platforms', platformsRouter)

export default routes