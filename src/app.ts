import express, { Application } from "express";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: {
    port: number;
    middlewares: Array<any>;
    controllers: Array<any>;
  }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
  }

  private middlewares(middlewares: Array<any>) {
    middlewares.forEach((middleware: any) => {
      this.app.use(middleware);
    });
  }

  private routes(controllers: Array<any>) {
    controllers.forEach((controller: any) => {
      this.app.use(controller.path, controller.router);
    });
  }

  public listen() {
    const _port = process.env.PORT || this.port;

    this.app.listen(_port, () => {
      console.log(`App going to the moon 🚀 on http://localhost:${_port}`);
    });
  }
}

export default App;
