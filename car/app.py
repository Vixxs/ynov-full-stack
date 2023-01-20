from flask import Flask, render_template, request, redirect, jsonify
from models import CarModel
from db import db, app
import json


@app.route('/', methods=['GET', 'POST'])
def index():
    return redirect('/car')


@app.route('/car/create', methods=['POST'])
def create():
    data = json.loads(request.data)
    name = data['name']
    price = data['price']
    image = data['image']
    car = CarModel(name=name, price=price, image=image)
    db.session.add(car)
    db.session.commit()
    return jsonify({"message": f"Car with id {car.id} create successfully !"})


@app.route('/car')
def RetrieveList():
    cars = CarModel.query.all()
    return jsonify(cars)


@app.route('/car/<int:id>', methods=['GET'])
def RetrieveEmployee(id):
    car = CarModel.query.filter_by(id=id).first()
    if car:
        return jsonify(car)
    return jsonify({"message": f"Car with id={id} Doens't exist"})


@app.route('/car/<int:id>/update', methods=['POST'])
def update(id):
    car = CarModel.query.filter_by(id=id).first()
    if car:
        data = json.loads(request.data)

        car.name = data['name'] if "name" in data else car.name
        car.price = data['price'] if "price" in data else car.price
        car.image = data['image'] if "image" in data else car.image
        db.session.add(car)
        db.session.commit()
        return jsonify({"message": f"Car with id={id} updated"})
    return jsonify({"message": f"Car with id={id} Doens't exist"})


@app.route('/car/<int:id>/delete', methods=['POST'])
def delete(id):
    car = CarModel.query.filter_by(id=id).first()
    if car:
        db.session.delete(car)
        db.session.commit()
        return jsonify({"message": f"Car with id={id} deleted"})
    return jsonify({"message": f"Car with id={id} Doesn't exist"})


app.run(host='localhost', port=5000)