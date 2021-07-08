import { Request, Response, Router } from "express";
import path from "path";

class HomeController {
  public path: string = "/";
  public router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/", this.home);
    this.router.get("/users", this.users);
  }

  private home(req: Request, res: Response) {
    return res
      .status(200)
      .sendFile(path.join(__dirname, "../assets/index.html"));
  }

  private users(req: Request, res: Response) {}
}

export default HomeController;
