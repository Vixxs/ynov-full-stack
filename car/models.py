from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class CarModel(db.Model):
    __tablename__ = "car"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    price = db.Column(db.Float())
    image = db.Column(db.String(3000))

    def __init__(self,name,price,image):
        self.name = name
        self.price = price
        self.image = image

    def __repr__(self):
        return f"{self.name}:{self.price}"
