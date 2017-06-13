import {Router, Request, Response, NextFunction} from "express";


export class HealthRouter {
    router: Router;
    recording: boolean = true;

    constructor() {
        this.init();
    }

    public init() {
        this.router = Router();
        this.router.get('/', this.health);
    }

    public health = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).type('json').send({status: {code: "UP"}});
    };
}


const healthRouter = new HealthRouter();
export default healthRouter.router;