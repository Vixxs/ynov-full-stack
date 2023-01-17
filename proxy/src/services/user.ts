import { Express } from "express";
import axios from "axios";

import {
  endPointServiceFutureUserList,
  endPointServiceUserAdminInfo,
  endPointServiceUserHello,
  endPointServiceUserList,
  urlApiAdminInfo,
  urlApiCheckRole,
  urlApiFutureUserList,
  urlApiRegistration,
  urlApiUser,
  urlApiUserInfo,
  urlApiUserLogin,
  urlApiUserList,
  urlApiValidateRegistration,
  endPointServiceUserRegistration,
  endPointServiceUserValidateRegistration,
} from "../types";
import { checkRole, checkUserInfo, connection } from "../userFunctions";

const initUrls = (app: Express) => {
  app.get(urlApiUser, (_, res) => {
    axios.get(endPointServiceUserHello).then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
  });

  app.post(urlApiUserLogin, (req, res) => {
    const body: { username: string; password: string } = req.body;
    connection(body.username, body.password).then((data) => {
      res.send(data);
    });
  });

  app.get(urlApiUserInfo, (req, res) => {
    const token = req.header("Authorization");
    checkUserInfo(token).then((onfulfilled) => res.send(onfulfilled));
  });

  app.get(urlApiUserList, (req, res) => {
    axios
      .get(endPointServiceUserList, {
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

  app.get(urlApiAdminInfo, (req, res) => {
    axios
      .get(endPointServiceUserAdminInfo, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((onfulfilled) => res.send(onfulfilled.data));
  });

  app.post(urlApiCheckRole, (req, res) => {
    const body: { role: string } = req.body;
    const token = req.header("Authorization");
    checkRole(body.role, token).then((onfulfilled) => {
      res.send(onfulfilled);
    });
  });

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

  app.post(urlApiValidateRegistration, (req, res) => {
      const data = req.body;
      const id = req.params.id;
      axios
        .post(endPointServiceUserValidateRegistration + id,
          data,
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

export default { initUrls };
