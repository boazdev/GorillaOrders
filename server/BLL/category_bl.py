from DAL.category_db_dal import *
from DAL.dish_db_dal import DishDBDAL
from flask import g
from flask import make_response
class CategoryBL:
    def __init__(self):
        self.__category_db_dal = CategoryDBDAL()
        self.__dish_db_dal = DishDBDAL()

    def get_all_categories(self):
        categories = self.__category_db_dal.get_all_categories()
        return categories

    def get_category(self,id):
        category = self.__category_db_dal.get_category(id)
        return category

    def add_category(self,obj):
        if g.user_data["isStaff"]!=True :
            return make_response("error : Unauthorized access to categories POST",403)
            #return "Unauthorized access to categories post"
        resp = self.__category_db_dal.add_category(obj)
        #print("add category, user_data:",g.user_data)
        return resp

    def update_category(self,id,obj):
        if g.user_data["isStaff"]!=True :
            return make_response("error : Unauthorized access to categories PUT",403)
        resp = self.__category_db_dal.update_category(id,obj)
        return resp

    def delete_category(self,id):
        if g.user_data["isStaff"]!=True :
            return make_response("error : Unauthorized access to categories DELETE",403)
        self.__dish_db_dal.delete_dishes_by_category(id)
        resp = self.__category_db_dal.delete_category(id)
        return resp