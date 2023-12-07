from flask import Flask, jsonify, request, render_template, redirect, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)

app.static_folder = 'static'

CORS(app)

# BD://user:password@UrlBD/nombreBD
# app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost/proyecto"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:password@localhost/proyecto_final"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

ma = Marshmallow(app)

class Producto(db.Model):  
  
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    precio = db.Column(db.Integer)
    stock = db.Column(db.Integer)
    imagen = db.Column(db.String(5000))

    def __init__(self, nombre, precio, stock, imagen):
       
        self.nombre = nombre
        self.precio = precio
        self.stock = stock
        self.imagen = imagen


with app.app_context():
    db.create_all()  


class ProductoSchema(ma.Schema):
   
    class Meta:
        fields = ("id", "nombre", "precio", "stock", "imagen")


producto_schema = ProductoSchema()  
productos_schema = ProductoSchema(many=True)  


@app.route("/api/productos", methods=["GET"])
def get_Productos():
    all_productos = Producto.query.all()
    result = productos_schema.dump(all_productos)
    return jsonify(result) 

@app.route("/productos/<id>", methods=["GET"])
def get_producto(id):
   
    producto = Producto.query.get(id)  
    return producto_schema.jsonify(producto)  

@app.route("/productos/<id>", methods=["DELETE"])
def delete_producto(id):
    
    producto = Producto.query.get(id)  
    db.session.delete(producto)  
    db.session.commit()  
    return producto_schema.jsonify(producto)  

@app.route("/productos", methods=["POST"])  
def create_producto():
    
    nombre = request.json["nombre"] 
    precio = request.json["precio"]  
    stock = request.json["stock"] 
    imagen = request.json["imagen"]  
    new_producto = Producto(nombre, precio, stock, imagen)  
    db.session.add(new_producto)  
    db.session.commit()  
    return producto_schema.jsonify(new_producto) 

@app.route("/productos/<int:id>/editar", methods=["GET", "POST"])
def update_producto(id):
    producto = Producto.query.get(id)

    if request.method == "POST":
        # Actualizar el producto con los datos del formulario
        producto.nombre = request.form["nombre"]
        producto.precio = request.form["precio"]
        producto.stock = request.form["stock"]
        producto.imagen = request.form["imagen"]
        
        db.session.commit()
        return redirect(url_for('productos'))

    # Renderizar el formulario de edición
    return render_template('producto_update.html', producto=producto)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/foro')
def foro():
    return render_template('foro.html')

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/productos')
def productos():
    productos = Producto.query.all()
    return render_template('productos.html', productos=productos)


@app.route('/visualizar_productos')
def visualizar_productos():
    productos = Producto.query.all()

    return render_template('visualizar_productos.html', productos=productos)

@app.route('/producto_nuevo')
def producto_nuevo():
    return render_template('producto_nuevo.html')


if __name__ == "__main__":

    app.run(debug=True, port=5000)