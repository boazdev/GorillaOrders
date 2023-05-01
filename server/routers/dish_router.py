from flask import Blueprint,jsonify,request
from BLL.dish_bl import *

dishes = Blueprint('dishes',__name__)
dishes_bl = DishBL()

#get ALL
@dishes.route("/", methods=['GET'])
def get_all_dishes():
    dishes = dishes_bl.get_all_dishes()
    return dishes


@dishes.route("/<id>",methods=['GET'])
def get_dish(id):
    dish_recv = dishes_bl.get_dish(id)
    return dish_recv


@dishes.route("/",methods=['POST'])
def add_dish():
    obj = request.json
    resp= dishes_bl.add_dish(obj)
    return resp


@dishes.route("/<id>",methods=['PUT'])
def update_dish(id):
    obj=request.json
    resp=dishes_bl.update_dish(id,obj)
    return resp

@dishes.route("/<id>",methods=['DELETE'])
def delete_dish(id):
    obj=request.json
    resp=dishes_bl.delete_dish(id)
    return resp



 