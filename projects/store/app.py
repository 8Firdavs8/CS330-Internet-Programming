import sqlite3
from flask import render_template, url_for, make_response, Flask, request
import csv
import os
import pandas as pd

app = Flask(__name__)

def read_txt(filename):
    """File format: name category number"""
    myList = []
    with open(filename, "r") as data:
        for row in data:
            myList.append(tuple(row.strip().split(", ")))
    return myList[1:]

@app.route("/")
def index():
    if request.method == "GET":
        return render_template("base.html")

@app.route("/add", methods=["GET", "POST"])
def add():
    name = request.args.get("name")
    category = request.args.get("category")
    price = request.args.get("number")

    if name and category and price:
        sum = str(name) + "," + str(category) +  "," + str(price)
        appendFile = open('roster.csv', 'a')
        appendFile.write(sum)
        appendFile.write('\n')
        appendFile.close()
        with sqlite3.connect(f"roster.db") as conn:
            conn.execute(f"drop table if exists roster")
            data = pd.read_csv(f"roster.csv", header=None)
            data.to_sql(f"roster", conn)   
            adding = conn.cursor()
            adding.execute(f"select * from roster")
            emptyList = []
            for name in adding:
                name = name[1:]
                emptyList.append(name)
            return render_template("add.html", name=emptyList)  
    else:
        return render_template("add.html")

@app.route("/list")
def listOfThings():
        with sqlite3.connect(f"roster.db") as conn:
                adding = conn.cursor()
                adding.execute(f"select * from roster")
                if adding:
                        emptyList = []
                        for name in adding:
                                name = name[1:]
                                emptyList.append(name)
                        if len(emptyList) == 0:
                                text = "No DATA!"
                                return render_template("list.html", removed=text)
                        return render_template("list.html", a=emptyList)
               

@app.route("/remove")
def removeFromList():
        try:
                with sqlite3.connect(f"roster.db") as conn:
                        adding = conn.cursor()
                        adding.execute(f"delete from roster")
                       
                        os.remove("roster.csv") 
                        message = "Successfully removed all the items from DB, Please Check Costumer"
                        return render_template("base.html", myMessage=message)
        except FileNotFoundError:
                cant = "You Can't Remove from an Empty table"
                return render_template("base.html", myMessage=cant)