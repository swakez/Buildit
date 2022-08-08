import os
import unittest

from flask_script import Manager
from flask_migrate import Migrate #, MigrateCommand

from flask import url_for
from flask.templating import render_template

from app.main import create_app, db
from app.main.model import user
from app import blueprint
from app.main.model import blacklist


app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')
# app = create_app('prod')
app.register_blueprint(blueprint)
app.app_context().push()

manager = Manager(app)

# migrate = Migrate(app, db)

# from app.main.database import db_session
# @app.teardown_appcontext
# def shutdown_session(exception=None):
#     print("Shutting down db session")
#     db_session.remove()


@manager.command
def run():
    app.run(debug=True)
    # app.run(host='localhost',port=6428)


@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


@app.route('/index')
def index():
    # print('hh')
    return render_template('index.html')


@app.route('/create_project')
def create_project():
    return render_template('new_project.html')


@app.route('/list_projects')
def list_projects():
    return render_template('listed_projects.html')


@app.route('/projects_details')
def list_projects_details():
    return render_template('listed_project_detail.html')

@app.route('/')
def landingpage():
    return render_template('landingpage.html')


if __name__ == '__main__':
    manager.run()



# if __name__ == "app":
#     app = create_app(env, args)