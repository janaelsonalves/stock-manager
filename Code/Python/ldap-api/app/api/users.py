from flask import jsonify, json, render_template, Response
from . import api

from models.user import User

@api.route('/users')
def users():
    return jsonify({'name': "Janaelson"})

@api.route("/")
def index():
    users = User.get_users()
    """ return Response(response=json.dumps(users), mimetype="application/json") """
    return render_template('users.html', users=users)

@api.route("/api/ldap/users/<uid>", methods=['GET'])
def get_users(uid):
    users = User.get_users_by_id(uid)
    return Response(response=users, status=200)
    """ entries_unserialized = json.loads(users) 
    return jsonify(entries_unserialized), 200 """