import {Express} from "express";
import axios from "axios";

import {
  endPointServiceUserAdminInfo,
  endPointServiceUserHello,
  endPointServiceUserList,
  urlApiAdminInfo,
  urlApiCheckRole,
  urlApiUser,
  urlApiUserInfo,
  urlApiUserLogin,
  urlApiUserList, endPointServiceUserLogin, endPointServiceUserInfo, endPointServiceUserCheckRole,
} from "../../types";

const userApi = (app: Express) => {
  app.get(urlApiUser, (_, res) => {
    axios.get(endPointServiceUserHello)
      .then((apiRes) => {
        res.json(apiRes.data);
      })
      .catch((err) => {
        res.status(err.response.status).json(err.response.data);
      });
  });

  app.post(urlApiUserLogin, (req, res) => {
    const body: { username: string; password: string } = req.body;
    axios
      .post(
        endPointServiceUserLogin,
        {username: body.username, password: body.password},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((apiRes) => {
        res.json(apiRes.data);
      })
      .catch((err) => {
        res.status(err.response.status).json(err.response.data);
      });
  });

  app.get(urlApiUserInfo, (req, res) => {
    const token = req.header("Authorization");
    axios
      .get(endPointServiceUserInfo, {
        headers: {
          Authorization: token,
        },
      })
      .then((apiRes) => {
        res.json(apiRes.data);
      })
      .catch((err) => {
        res.status(err.response.status).json(err.response.data);
      });
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
      .then((apiRes) => {
        res.json(apiRes.data);
      })
      .catch((err) => {
        res.status(err.response.status).json(err.response.data);
      });
  });

  app.post(urlApiCheckRole, (req, res) => {
    const body: { role: string } = req.body;
    const token = req.header("Authorization");
    axios
      .post(
        endPointServiceUserCheckRole,
        {role: body.role},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((apiRes) => {
        res.json(apiRes.data);
      })
      .catch((err) => {
        res.status(err.response.status).json(err.response.data);
      });
  });
};

export default {userApi};
