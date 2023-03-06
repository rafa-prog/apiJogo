import auth from "@config/auth";
import AppError from "src/shared/errors/appError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
    iat: number
    exp: number
    sub: string
}

export default function isAuthenticated(
    request: Request, response: Response, next: NextFunction) {

    const authReader = request.headers.authorization
    if(!authReader) {
        throw new AppError('JWT Token is missing.')
    }

    const [type, token] = authReader.split(' ')

    try {

        const decodeToken = verify(token, auth.jwt.secret)

        const { sub } = decodeToken as TokenPayload

        request.user = { id: sub }

        return next()
        
    } catch {
        throw new AppError('Invalid JWT token.')
    }
}