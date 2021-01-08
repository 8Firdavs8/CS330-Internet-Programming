from flask import Flask

app = Flask(__name__)


@app.route("/")
@app.route("/firdavs")
def hello_world():
    return "Hello, Great!"
