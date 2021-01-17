#!/usr/bin/env python3
"""
jokes api
"""

import random
from typing import List

import pyjokes

import json
from flask import Flask, Response, jsonify, render_template, request
# from flask_cors import CORS, cross_origin
from faker import Faker

app = Flask(__name__)

j = pyjokes

@app.route("/api/v1/jokes")
def get_Joke():
    just_joke = j.get_joke()
    one_joke = Response(json.dumps({"jokes": just_joke}))
    one_joke.headers["Access-Control-Allow-Origin"] = "*"
    one_joke.headers["Content-Type"] = "application/json"
    return one_joke


@app.route("/api/v1/jokes/<id>")
def get_Specified_Joke(id):
    more_Jokes = j.get_jokes()
    joke = more_Jokes[int(id)]
    print(joke)
    try:
        more = Response(json.dumps({"id": joke}))
        more.headers["Access-Control-Allow-Origin"] = "*"
        more.headers["Content-Type"] = "application/json"
        return more
    except:
        return "404 Not Found"






if __name__ == "__main__":
    app.run("0.0.0.0")
