import { NextFunction, Request, Response } from 'express'
export default (req: Response, res: Request, next: NextFunction) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}