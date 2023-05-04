from DAL.user_db_dal import *
from DAL.user_ws_dal import *

class UserBL:
    def __init__(self):
        self.__user_db_dal = UserDBDAL()
        self.__user_ws_dal = UserWSDAL()
    def get_all_users(self):
        users = self.__user_db_dal.get_all_users()
        return users

    def get_user(self,id):
        user = self.__user_db_dal.get_user(id)
        return user

    def add_user(self,obj):
        if self.__user_db_dal.get_user_by_username(obj["username"])!= None:
            return 403
        obj["isStaff"]=False
        resp = self.__user_db_dal.add_user(obj)
        return resp

    def update_user(self,id,obj):
        resp = self.__user_db_dal.update_user(id,obj)
        return resp

    def delete_user(self,id):
        resp = self.__user_db_dal.delete_user(id)
        return resp
    
    def init_users_db(self):
        users= self.__user_ws_dal.get_all_users()
        users_lst = list(map(lambda item: {"username":item["username"],"password":item["username"][0:4]+"123",
                                           "fullname":item["name"], "email": item["email"]},users))
        for user in users_lst:
            self.__user_db_dal.add_user(user)