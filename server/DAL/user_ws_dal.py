import requests

class UserWSDAL:
    def __init__(self):
        self.__url = "https://jsonplaceholder.typicode.com/users"

    def get_all_users(self):
        resp= requests.get(self.__url)
        return resp.json()
    
    def get_user(self,id):
        resp = requests.get(self.__url+"/" + id)
        return resp.json()