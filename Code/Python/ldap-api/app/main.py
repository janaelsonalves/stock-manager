from flask import json, jsonify
from flask import Flask, Response, json, render_template
from flask_cors import CORS

from api import *

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(api)

if __name__ == "__main__":
    app.run(debug=True)