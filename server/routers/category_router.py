from flask import Blueprint,jsonify,request
from BLL.category_bl import *

categories = Blueprint('categories',__name__)
categories_bl = CategoryBL()

#get ALL
@categories.route("/", methods=['GET'])
def get_all_categories():
    categories = categories_bl.get_all_categories()
    return categories


@categories.route("/<id>",methods=['GET'])
def get_category(id):
    category_recv = categories_bl.get_category(id)
    return category_recv


@categories.route("/",methods=['POST'])
def add_category():
    obj = request.json
    resp= categories_bl.add_category(obj)
    return resp


@categories.route("/<id>",methods=['PUT'])
def update_category(id):
    obj=request.json
    resp=categories_bl.update_category(id,obj)
    return resp

@categories.route("/<id>",methods=['DELETE'])
def delete_category(id):
    obj=request.json
    resp=categories_bl.delete_category(id)
    return resp



 