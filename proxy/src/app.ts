import express from "express";
import bodyParser from "body-parser";

import checkToken from "./middlewares/checkToken";
import userService from "./services/user/user";
import futureUserService from "./services/future-user/futureUser";
import carService from "./services/car/car";

import { urlApi } from "./types";
const app = express();
const cors = require('cors')
const port = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(checkToken());

app.get(urlApi, (_, res) => {
  res.send("User API");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

userService.userApi(app);
futureUserService.futureUserApi(app);
carService.carApi(app);
