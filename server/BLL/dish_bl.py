from DAL.dish_db_dal import *
from DAL.dishes_file_dal import *
from flask import g,make_response
class DishBL:
    def __init__(self):
        self.__dish_db_dal = DishDBDAL()
        self.__dish_file_dal = DishesFileDal()

    def get_all_dishes(self):
        dishes = self.__dish_db_dal.get_all_dishes()
        return dishes

    def get_dish(self,id):
        dish = self.__dish_db_dal.get_dish(id)
        return dish

    def add_dish(self,obj):
        if g.user_data["isStaff"]!=True :
            return make_response("error : Unauthorized access to dishes POST",403)
        resp = self.__dish_db_dal.add_dish(obj)
        return resp

    def update_dish(self,id,obj):
        if g.user_data["isStaff"]!=True :
            return make_response("error : Unauthorized access to dishes PUT",403)
        resp = self.__dish_db_dal.update_dish(id,obj)
        return resp

    def delete_dish(self,id):
        if g.user_data["isStaff"]!=True :
            return make_response("error : Unauthorized access to dishes DELETE",403)
        resp = self.__dish_db_dal.delete_dish(id)
        return resp
    
    

    def init_dishes_db(self):
        dishes_lst = self.__dish_file_dal.read_file()
        for dish in dishes_lst["dishes"]:
            self.__dish_db_dal.add_dish(dish)