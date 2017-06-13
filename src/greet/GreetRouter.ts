import {Router, Request, Response, NextFunction} from "express";


export class GreetRouter {
    router: Router;
    recording : boolean = true;

    constructor() {
        this.init();
    }

    public init() {
        this.router = Router();
        this.router.get('/', this.greeting);
    }

    public greeting = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).type('json').send({value: "Hello World"});
    };
}


const greetRouter = new GreetRouter();
export default greetRouter.router;