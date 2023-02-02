import { Express } from "express";
import axios from "axios";

import {
  endPointServiceFutureUserList,
  urlApiFutureUserList,
  urlApiRegistration,
  urlApiValidateRegistration,
  endPointServiceUserRegistration,
  endPointServiceUserValidateRegistration,
} from "../../types";
const futureUserApi = (app: Express) => {

  app.get(urlApiFutureUserList, (req, res) => {
    axios
      .get(endPointServiceFutureUserList, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((apiRes) => {
        res.json(apiRes.data);
      })
      .catch((err) => {
        res.status(err.response.status).json(err.response.data);
      });
  });

  app.post(urlApiRegistration, (req, res) => {
    const data = req.body;
    axios
      .post(
        endPointServiceUserRegistration,
        {data}
      )
      .then((apiRes) => {
        res.json(apiRes.data);
      })
      .catch((err) => {
        res.status(err.response.status).json(err.response.data);
      });
  });

  app.get(urlApiValidateRegistration, (req, res) => {
      const id = req.params.id;
      axios
        .get(endPointServiceUserValidateRegistration + id,
          {
            headers: {
              Authorization: req.header("Authorization"),
            },
          })
        .then((apiRes) => {
          res.json(apiRes.data);
        })
        .catch((err) => {
          res.status(err.response.status).json(err.response.data);
        });
    }
  );
};

export default { futureUserApi };
