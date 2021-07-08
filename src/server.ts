import express from "express";

import App from "./app";
import HomeController from "./controllers/home.controller";
import ApiController from "./controllers/api.controller";

const app = new App({
  port: 3001,
  middlewares: <any>[express.json(), express.urlencoded({ extended: true })],
  controllers: <any>[new HomeController(), new ApiController()],
});

app.listen();
