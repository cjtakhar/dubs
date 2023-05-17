import psycopg2
from flask import Flask
from dotenv import load_dotenv
import os

app = Flask(__name__)

load_dotenv()

# Set up database connection
conn = psycopg2.connect(
    dbname="dubs",
    user="kt",
    password=os.environ.get("DB_PASSWORD"),
    host="localhost",
    port="5432"
)

# Create a cursor object to execute SQL queries
cur = conn.cursor()

# Create a table
cur.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )
''')
conn.commit()

# Close the cursor and database connection
cur.close()
conn.close()