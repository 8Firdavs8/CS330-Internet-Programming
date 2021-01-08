#!/usr/bin/env python3
"""Flask application to use `pyjokes`"""

import random
from typing import List

import pyjokes
from flask import Flask, render_template, request

app = Flask(__name__)



@app.route("/", methods=["GET"])
def index():
   language = request.args.get("language")
   category = request.args.get("category")    
   if language and category:

       error = None
       try:

           joke_dict = get_joke_dict(language=language, category=category)
       except (pyjokes.pyjokes.LanguageNotFoundError\
           ,pyjokes.pyjokes.CategoryNotFoundError):
           joke_dict = invalid_combination_error(language=language, category=category)
           error=True
       return render_template("jokes.html", joke=joke_dict, error=error)
   else:
    return render_template("base.html")
  
@app.route("/", methods=["POST"])
def index_jokes(language, category):
    content = pyjokes.get_joke(language, category)
    
    joke_dict = {
        "category" : category,
        "language" : language,
       
        "content" : content
    }

    return joke_dict 

def send_joke(language, category):

    error_dict = {
    "category" : category,
    "language"  : language,
    "content" : "Invalid Combination. Select another combination and try again"
    }

    return error_dict
