from flask import Flask, request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return {"msg": "hello world"}


@app.route("/alunos")
def get_alunos():
    with open("data.json", "r", encoding="utf-8") as file:
        r = json.loads(file.read())
    return r


@app.route("/encontrar")
def search_aluno():
    encontrados = []
    query = request.args.get('q', default="")
    with open("data.json", "r", encoding="utf-8") as file:
        r = json.loads(file.read())
        for i, m in enumerate(r["data"]):
            if query.lower() in m["name"].lower():
                encontrados.append(m)
                print(m)

    return {"resultado": encontrados}


app.run(debug=True, host='0.0.0.0')
