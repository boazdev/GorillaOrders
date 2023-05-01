from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

class CategoryDBDAL:
    def __init__(self):
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["gorillaDB"]
        self.__collection = self.__db["categories"]
    
    def get_category(self,id): 
        category = self.__collection.find_one({"_id":ObjectId(id)})
        return category

    def get_category_aggr(self,pipeline):
        category = self.__collection.aggregate(pipeline)
        return list(category)

    
    def get_all_categories(self):
        categories = list(self.__collection.find({}))
        return categories
    
    def add_category(self,obj):
        self.__collection.insert_one(obj)
        return "Created category with ID " +str(obj["_id"])


    def delete_category(self,id):
        self.__collection.delete_one({"_id":ObjectId(id)})
        return "Deleted category!"

    def update_category(self,id,obj):
        self.__collection.update_one({"_id": ObjectId(id)},{"$set":obj})
        return "Updated category"