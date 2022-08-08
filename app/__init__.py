# app/__init__.py

from flask_restx import Api
from flask import Blueprint
from flask import url_for

from .main.controller.user_controller import api as user_ns

blueprint = Blueprint('api', __name__)#, url_prefix='/test')

api = Api(blueprint,
          title='FLASK RESTPLUS API BOILER-PLATE WITH JWT',
          version='1.0',
          description='a boilerplate for flask restplus web service',
          # prefix='/test/'
          doc='/api/v1', prefix="/api/v1"

          )

api.add_namespace(user_ns, path='/user')
# assert url_for('api.doc') == '/test/'
