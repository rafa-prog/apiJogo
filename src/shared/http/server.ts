import 'reflect-metadata' // linha 1 
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import cors from "cors";
import routes from "./routes";
import AppError from "../errors/appError";
import 'src/shared/typeorm'
import { errors } from 'celebrate';
import uploadConfig from "@config/upload"

const port = 3333

const app = express()
app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)
app.use(errors())
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen(port, () => {
    console.log('Server started at port: http://localhost:' + port)
})