#!/usr/bin/env python3
"""Flask application to use pyjokes"""

import random
from typing import List

import pyjokes
from flask import Flask, render_template, request

app = Flask(__name__)



@app.route("/", methods=["GET"])
def index():
    return render_template("base.html")

@app.route("/", methods=["POST"])
def index_jokes():

    language = request.form.get("selLang")
    category = request.form.get("selCat")
    number = 1
    try:
        number = int(request.form.get("selNumber"))
    except:
        pass

    jokes = send_joke(language=language, category=category, number=number)
    return render_template("jokes.html", jokes=jokes)


def send_joke(language: str = "en", category: str = "all", number: int = 1) -> List[str]:

    jokes = []

    for i in range(number):
        try:
            content = pyjokes.get_joke(language, category)
            jokes.append(content)
        except (pyjokes.pyjokes.LanguageNotFoundError\
            ,pyjokes.pyjokes.CategoryNotFoundError):
            return ["No kidding!"]

    return jokes

def invalid_combination_error(language: str, category: str) -> str:
    return "That language/category combination is invalid"