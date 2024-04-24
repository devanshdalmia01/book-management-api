import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IUserPayload {
    id: string;
}

interface IGetUserAuthInfoRequest extends Request {
    user?: IUserPayload;
}

export const auth = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split("Bearer ")[1];

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};
