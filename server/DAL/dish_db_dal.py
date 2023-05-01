from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

class DishDBDAL:
    def __init__(self):
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["gorillaDB"]
        self.__collection = self.__db["dishes"]
    
    def get_dish(self,id): 
        dish = self.__collection.find_one({"_id":ObjectId(id)})
        return dish

    def get_dish_aggr(self,pipeline):
        dish = self.__collection.aggregate(pipeline)
        return list(dish)

    
    def get_all_dishes(self):
        dishes = list(self.__collection.find({}))
        return dishes
    
    def add_dish(self,obj):
        obj["categoryId"]=ObjectId(obj["categoryId"])
        self.__collection.insert_one(obj)
        return "Created dish with ID " +str(obj["_id"])


    def delete_dish(self,id):
        self.__collection.delete_one({"_id":ObjectId(id)})
        return "Deleted dish!"
    
    def delete_dishes_by_category(self, cid):#category id
        resp = self.__collection.delete_many({"_id":ObjectId(cid)})

    def update_dish(self,id,obj):
        self.__collection.update_one({"_id": ObjectId(id)},{"$set":obj})
        return "Updated dish"
    
    
