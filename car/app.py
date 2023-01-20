from flask import Flask,render_template,request,redirect,jsonify
from models import db,CarModel
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.before_first_request
def create_table():
    db.create_all()


@app.route('/car/create', methods=['GET', 'POST'])
def create():
    if request.method == 'GET':
        return render_template('createcar.html')

    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']
        image = request.form['image']
        car = CarModel(name=name, price=price, image=image)
        db.session.add(car)
        db.session.commit()
        return redirect('/car')


@app.route('/car')
def RetrieveList():
    cars = CarModel.query.all()
    return render_template('carlist.html', cars=cars)


@app.route('/car/<int:id>')
def RetrieveEmployee(id):
    car = CarModel.query.filter_by(id=id).first()
    if car:
        return render_template('car.html', car=car)
    return f"Car with id ={id} Doenst exist"


@app.route('/car/<int:id>/update', methods=['GET', 'POST'])
def update(id):
    car = CarModel.query.filter_by(id=id).first()
    if request.method == 'POST':
        if car:
            car.name = request.form['name']
            car.price = request.form['price']
            car.image = request.form['image']
            db.session.add(car)
            db.session.commit()
            return redirect(f'/car/{id}')
        return f"Car with id = {id} Does not exist"

    return render_template('updatecar.html', car=car)


@app.route('/car/<int:id>/delete', methods=['GET', 'POST'])
def delete(id):
    car = CarModel.query.filter_by(id=id).first()
    if request.method == 'POST':
        if car:
            db.session.delete(car)
            db.session.commit()
            return redirect('/car')
        abort(404)

    return render_template('delete.html')


app.run(host='localhost', port=5000)