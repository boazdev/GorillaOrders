from flask import Blueprint,jsonify,request
from BLL.cart_bl import *

carts = Blueprint('carts',__name__)
carts_bl = CartBL()

#get ALL
@carts.route("/", methods=['GET'])
def get_all_carts():
    carts = carts_bl.get_all_carts()
    return carts


@carts.route("/<id>",methods=['GET'])
def get_cart(id):
    cart_recv = carts_bl.get_cart(id)
    return cart_recv


@carts.route("/",methods=['POST'])
def add_cart():
    obj = request.json
    resp= carts_bl.add_cart(obj)
    return resp


@carts.route("/<id>",methods=['PUT'])
def update_cart(id):
    obj=request.json
    resp=carts_bl.update_cart(id,obj)
    return resp

@carts.route("/<id>",methods=['DELETE'])
def delete_cart(id):
    obj=request.json
    resp=carts_bl.delete_cart(id)
    return resp



 