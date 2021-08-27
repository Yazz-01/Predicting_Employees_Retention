import numpy as np
from numpy.core.getlimits import MachArLike
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
def modelpage():
    return render_template("model.html")

@app.route("/jupyter-notebook")
def jupyterspage():
    return render_template("jupyter-notebook.html")

@app.route("/visualization")
def smappage():
    return render_template("visualization.html")



@app.route("/predict/<Overtime>/<MaritalStatus>/<NumCompaniesWorked>/<TotalWorkingYears>/<InSales>/<Gender>/")
def viajesdata(Overtime,MaritalStatus,NumCompaniesWorked,TotalWorkingYears,InSales,Gender):
    #note, InSales variable must be imported as 0 or 1
    NumCompaniesWorked=int(NumCompaniesWorked)
    TotalWorkingYears=int(TotalWorkingYears)
    InSales=int(InSales)
    model=load('attrition_pred.lrm')
    scaler=load('lrm.scaler')   
    print("Model and scaler Loading done")

    Fidelity = NumCompaniesWorked/TotalWorkingYears

    male=0
    female=0
    OTyes=0
    OTno=0
    divorced=0
    married=0
    single=0

    if MaritalStatus=="Single":
        single=1
    elif MaritalStatus=="Married":
        married=1
    else:
        divorced=1

    if Overtime=="Yes":
        OTyes=1
    else:
        OTno=1

    if Gender=="Male":
        male=1
    else:   
        female=1
    data={'Fidelity':[Fidelity],
        'SalesDpt':[InSales],
        'OverTime_No':[OTno],
        'OverTime_Yes':[OTyes],
        'MaritalStatus_Divorced':[divorced],
        'MaritalStatus_Married':[married],
        'MaritalStatus_Single':[single],
        'Gender_Female':[female],
        'Gender_Male':[male]}
    print("Data insertion done")
    data=pd.DataFrame(data)
    data_binary_encoded = pd.get_dummies(data)
    X_scaled = scaler.transform(data_binary_encoded)
    print("Scaling done")
    result=model.predict(X_scaled)
    print("prediction done")
    print(result)
    return str(result[0])


if __name__ == "__main__":
    app.run(debug=True)
#testing to update again