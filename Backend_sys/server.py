from flask import Flask, request, jsonify, Response
from flask_sqlalchemy import SQLAlchemy
import json
import requests
import os
import mysql.connector
import bcrypt
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS",'DELETE'],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True  
    }
})

config = {
  'host':'localhost',
  'port': 3306,
  'database': 'Eduwealth',
  'user': 'root',
  'password': ''
}

try:
  connection = mysql.connector.connect(**config)
  if connection.is_connected():
    print(f"The db is connected {connection}")
except mysql.connector.Error as e:
  print(e,"The db is not connected")

if __name__ == '__main__':
  app.run(host='0.0.0.0',	debug=True, port=5000, use_reloader=False)


#THESE ARE THE SUPABASE CREDENTIALS

# # Supabase database connection settings
# SUPABASE_URL = os.environ['SUPABASE_URL']
# SUPABASE_USER = os.environ['SUPABASE_USER']
# SUPABASE_PASSWORD = os.environ['SUPABASE_PASSWORD']

# try:
#     # Establish a connection to the Supabase database
#     cnx = psycopg2.connect(
#         host=SUPABASE_URL,
#         user=SUPABASE_USER,
#         password=SUPABASE_PASSWORD,
#         dbname='Eduwealth'
#     )
#     print("Supabase database connection established")
# except psycopg2.Error as err:
#     print("Supabase database connection failed: {}".format(err))