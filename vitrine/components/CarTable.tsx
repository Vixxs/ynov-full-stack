import React, {useEffect, useState} from "react";
import axios from "axios";

import {CarTableComponent} from "../.yalc/my-lib-ui";
import {Modal} from "../.yalc/my-lib-ui";
import {InputComponent} from "../.yalc/my-lib-ui";
import {ButtonComponent} from "../.yalc/my-lib-ui";
import {API} from "../pages/api";
import useAuth from "../hook/useAuth";

const CarTable = () => {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);
  const {token} = useAuth();

  useEffect(() => {
    if (!token) return;
    fetchCars();
  }, [token]);

  const handleUpdate = (event) => {
    if (!token) return;
    event.preventDefault();
    const formData = new FormData(event.target);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const price = formData.get("price");
    const image = formData.get("image");
    const id = formData.get("id");
    axios.post(API.UPDATE_CAR.replace(':id', id), {brand, model, price, image},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(() => {
        fetchCars();
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleDelete = (data: any) => {
    if (!token) return;
    console.log(data)
    axios.get(API.DELETE_CAR.replace(':id', data.id),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(() => {
      fetchCars();
      setOpen(false);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleSubmit = (event) => {
    if (!token) return;
    event.preventDefault();
    const formData = new FormData(event.target);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const price = formData.get("price");
    const image = formData.get("image");
    axios.post(API.CREATE_CAR, {brand, model, price, image},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(() => {
      fetchCars();
      setOpen(false);
    }).catch((error) => {
      console.log(error);
    });
  }

  const fetchCars = () => {
    axios.get(API.CAR_LIST,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
          setCars(response.data);
        }
      );
  }
  return (
    <>
      <ButtonComponent label="Ajouter une voiture" onClick={() => setOpen(true)}/>
      <Modal label="Ajouter une voiture" isOpen={open} onRequestClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <InputComponent name="brand" label="Marque" />
          <InputComponent name="model" label="Modèle" />
          <InputComponent name="price" label="Prix" type="number" />
          <InputComponent name="image" label="Image" />
          <ButtonComponent label="Ajouter la voiture" />
        </form>
      </Modal>
      <CarTableComponent onUpdate={handleUpdate} onDelete={handleDelete} data={cars} />
    </>
  );
}

export default CarTable;