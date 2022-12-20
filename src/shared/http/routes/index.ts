import gameRouter from "@modules/games/routes/games.routes";
import PlatformRouter from "@modules/platforms/routes/platforms.routes";
import { Router } from "express";

const routes = Router()

routes.use('/games', gameRouter)
routes.use('/platforms', PlatformRouter)

export default routes