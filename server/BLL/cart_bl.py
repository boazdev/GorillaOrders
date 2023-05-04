from DAL.cart_db_dal import *

class CartBL:
    def __init__(self):
        self.__cart_db_dal = CartDBDAL()

    def get_all_carts(self):
        carts = self.__cart_db_dal.get_all_carts()
        return carts

    def get_cart(self,id):
        cart = self.__cart_db_dal.get_cart(id)
        return cart

    def add_cart(self,obj):
        resp = self.__cart_db_dal.add_cart(obj)
        return resp

    def update_cart(self,id,obj): #todo: add authrozation, only admins are allowed to set cart isDelivered status
        resp = self.__cart_db_dal.update_cart(id,obj)
        return resp

    def delete_cart(self,id):
        resp = self.__cart_db_dal.delete_cart(id)
        return resp