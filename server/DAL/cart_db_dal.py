from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

class CartDBDAL:
    def __init__(self):
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["gorillaDB"]
        self.__collection = self.__db["carts"]
    
    def get_cart(self,id): 
        cart = self.__collection.find_one({"_id":ObjectId(id)})
        return cart

    def get_cart_aggr(self,pipeline):
        cart = self.__collection.aggregate(pipeline)
        return list(cart)

    
    def get_all_carts(self):
        carts = list(self.__collection.find({}))
        return carts
    
    def add_cart(self,obj):
        self.__collection.insert_one(obj)
        return "Created cart with ID " +str(obj["_id"])


    def delete_cart(self,id):
        self.__collection.delete_one({"_id":ObjectId(id)})
        return "Deleted cart!"

    def update_cart(self,id,obj):
        self.__collection.update_one({"_id": ObjectId(id)},{"$set":obj})
        return "Updated cart"