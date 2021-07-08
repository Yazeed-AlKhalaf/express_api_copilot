import { Request, Response, Router } from "express";
import path from "path";
import * as expressValidator from "express-validator";

class ApiController {
  public path: string = "/api";
  public router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/", this.apiDocs);
    this.router.get(
      "/users",
      expressValidator.header("token").isString().isLength({
        max: 20,
        min: 20,
      }),
      this.users
    );
  }

  private apiDocs(req: Request, res: Response) {
    return res
      .status(200)
      .sendFile(path.join(__dirname, "../assets/api/index.html"));
  }

  private users(req: Request, res: Response) {
    const validationResult = expressValidator.validationResult(req);
    if (!validationResult.isEmpty()) {
      console.error(`token is not valid`);
      return res.status(400).json({
        error: validationResult,
      });
    }

    return res.status(200).json({
      code: "success",
      data: [
        {
          id: "7cg45dyqR0qmlk",
          firstName: "Oy",
          lastName: "yo",
          email: "oyyo@example.com",
        },
        {
          id: "afkjl;ajf;aljfkl;",
          firstName: "jds",
          lastName: "sdj",
          email: "oyyo@example.com",
        },
        {
          id: "fiopa;ujfail;j",
          firstName: "ioq",
          lastName: "qoi",
          email: "oyyo@example.com",
        },
      ],
    });
  }
}

export default ApiController;
