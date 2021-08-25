import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask,jsonify,render_template
import pandas as pd
from flask_cors import CORS
import ast
from joblib import dump, load



##engine = create_engine(f'postgresql://postgres:{password}@localhost:5432/ecobici')

# reflect an existing database into a new model
#Base = automap_base()
# reflect the tables
app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/demo")
def data():
    return render_template("demo.html")

@app.route("/model")
def routespage():
    return render_template("model.html")

@app.route("/visualization")
def smappage():
    return render_template("visualization.html")



@app.route("/predict/<Overtime>/<MaritalStatus>/<NumCompaniesWorked>/<TotalWorkingYears>/<InSales>/<Gender>/")
def viajesdata(Overtime,MaritalStatus,NumCompaniesWorked,TotalWorkingYears,InSales,Gender):
    #note, InSales variable must be imported as 0 or 1
    model=load('attrition_pred.lrm')
    scaler=load('lrm.scaler')   


    Fidelity = NumCompaniesWorked/TotalWorkingYears
    data={'OverTime':[Overtime],
    'Fidelity':[Fidelity],
    'SalesDpt':[InSales],
    'MaritalStatus':[MaritalStatus],
    'Gender':[Gender]
    }
    data=pd.DataFrame(data)
    data_binary_encoded = pd.get_dummies(data)
    X_scaled = scaler.transform(data_binary_encoded)

    result=model.predict(X_scaled)
    print(result)
    return result


if __name__ == "__main__":
    app.run(debug=True)
#testing to update again