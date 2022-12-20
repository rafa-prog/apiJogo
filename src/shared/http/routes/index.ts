import gameRouter from "@modules/games/routes/games.routes";
import { Router } from "express";

const routes = Router()

routes.use('/games', gameRouter)

export default routes