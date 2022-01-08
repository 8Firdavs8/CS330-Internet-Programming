import sqlite3
from flask import render_template, url_for, make_response, Flask, request, jsonify
import os
import pandas as pd

app = Flask(__name__)
PORT = int(os.environ.get('PORT', '5000'))

def read_txt(filename):
    myList = []
    with open(filename, "r") as data:
        for line in data:
            myList.append(tuple(line.strip().split(", ")))
    return myList[1:]

@app.route("/")
def index():
    if request.method == "GET":
        return render_template("base.html")


@app.route("/viewMyQuotes")
def customer():
        with sqlite3.connect(f"roster.db") as conn:
                cur = conn.cursor()
                cur.execute(f"select * from roster")
                if cur:
                        emptyList = []
                        for name in cur:
                                name = name[1:]
                                emptyList.append(name)
                        if len(emptyList) == 0:
                                text = "You have not added any inspirational quote yet!"
                                return render_template("viewMyQuotes.html", removed=text)
                        return render_template("viewMyQuotes.html", a=emptyList)  



@app.route("/myQuotes", methods=["GET", "POST"])
def admin():
    name = request.args.get("name")
    category = request.args.get("category")
    number = request.args.get("number")
    if name and category and number:
        sum = str(name) + "," + str(category) +  "," + str(number)
        appendFile = open('roster.csv', 'a')
        appendFile.write(sum)
        appendFile.write('\n')
        appendFile.close()
        with sqlite3.connect(f"roster.db") as conn:
            conn.execute(f"drop table if exists roster")
            data = pd.read_csv(f"roster.csv", header=None)
            data.to_sql(f"roster", conn)
            cur = conn.cursor()
            cur.execute(f"select * from roster")
            emptyList = []
            for name in cur:
                name = name[1:]
                emptyList.append(name)
            return render_template("myQuotes.html", name=emptyList)  
    else:
        return render_template("myQuotes.html")


               
@app.route("/remove")
def delete():
        try:
                with sqlite3.connect(f"roster.db") as conn:
                        cur = conn.cursor()
                        cur.execute(f"delete from roster")
                        os.remove("roster.csv") 
                        message = "It's sad to see you delete all of your inspiration"
                        return render_template("base.html", myMessage=message)
        except FileNotFoundError:
                cant = "You Can't Delete Non-Existing Quote"
                return render_template("base.html", myMessage=cant)



@app.route("/api/quotes")
def quotesAPI():
        with sqlite3.connect(f"roster.db") as conn:
                cur = conn.cursor()
                cur.execute(f"select * from roster")
                if cur:
                        emptyList = []
                        for name in cur:
                                name = name[1:]
                                emptyList.append(name)
                        return jsonify(emptyList)




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT)
