import { Express } from "express";
import axios from "axios";

const urlApi = "/api/.car";
const urlApiCarList = `${urlApi}/car`;
const urlApiCarDetail = `${urlApi}/car/:id`;
const urlApiCarCreate = `${urlApi}/car/create`;
const urlApiCarUpdate = `${urlApi}/car/:id/update`;
const urlApiCarDelete = `${urlApi}/car/:id/delete`;

const endPointCar = "http://car";
const endPointCarList = `${endPointCar}/car`;
const endPointCarDetail = `${endPointCar}/car/:id`;
const endPointCarCreate = `${endPointCar}/car/create`;
const endPointCarUpdate = `${endPointCar}/car/:id/update`;
const endPointCarDelete = `${endPointCar}/car/:id/delete`;

const carApi = (app: Express) => {
    app.get(urlApiCarList, (req, res) => {
        axios
            .get(endPointCarList)
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.get(urlApiCarDetail, (req, res) => {
        axios
            .get(endPointCarDetail)
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });

    app.post(urlApiCarCreate, (req, res) => {
        const data = req.body;
        axios
            .post(endPointCarCreate, {data})
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });

    app.post(urlApiCarUpdate, (req, res) => {
        const data = req.body;
        axios
            .post(endPointCarUpdate, {data})
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });

    app.post(urlApiCarDelete, (req, res) => {
        axios
            .post(endPointCarDelete)
            .then((apiRes) => {
                res.json(apiRes.data);
            })
            .catch((err) => {
                res.status(err.response.status).json(err.response.data);
            });
    });
};

export default { carApi };
