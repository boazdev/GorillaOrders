from datetime import datetime
from flask import Flask
import json
from bson import ObjectId
from flask_cors import CORS
from flask import request
from enconder import JSONEncoder

from routers.user_router import users
from routers.dish_router import dishes
from routers.category_router import categories
from routers.cart_router import carts
from routers.auth_router import auth, verify_token
from BLL.user_bl import UserBL
from BLL.dish_bl import DishBL
from utils.mongo_utils import *

app = Flask(__name__) #todo:add TDD, add json validation schema, add 3rd party auth0 authorization, add passwords encrpytion salts
app.url_map.strict_slashes = False
app.json_encoder = JSONEncoder
CORS(app)
app.before_request(verify_token) 
app.register_blueprint(users, url_prefix="/users")
app.register_blueprint(dishes, url_prefix="/dishes")
app.register_blueprint(categories, url_prefix="/categories")
app.register_blueprint(carts, url_prefix="/carts")

app.register_blueprint(auth, url_prefix="/login")
check_mongodb_server()
userBL=UserBL()
if(len(userBL.get_all_users())==0):
    userBL.init_users_db()

dishBL=DishBL()
if(len(dishBL.get_all_dishes())==0):
    dishBL.init_dishes_db()
#shit
app.run(port=8000,debug=True)