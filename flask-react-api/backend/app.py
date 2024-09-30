from flask import Flask, request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

dataRec = []

@app.route("/getData", methods=["GET"])
def get_dataRec():
    print(dataRec)
    if dataRec:
        latestRec = dataRec[-1]
        print(latestRec)
        print(dataRec)
        return jsonify({"latestRec": latestRec})
    return jsonify({"latestRec": "No data"})

@app.route("/inputData", methods=["POST"])
def post_dataRec():
    data = request.json
    inputString = request.json.get("inputStr")
    print(data)
    print(inputString)
    if inputString != "":
        dataRec.append(inputString)
        print(dataRec)
        return jsonify({"message":"Record added successfully"}), 201
    else:
        return jsonify({"message":"Please enter input"}), 400

if __name__ == '__main__':
    app.run(debug=True)
