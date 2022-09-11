from flask import Flask, jsonify, request
import psycopg2

app = Flask(__name__)

def connect_database():
    conn = psycopg2.connect(database="flask", user = "postgres", password = "postgres", host = "127.0.0.1", port = "5433")
    return conn

@app.route('/')
def index():
    conn = connect_database()
    cur = conn.cursor()
    cur.execute('SELECT * FROM flask;')
    books = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(books)

@app.route('/login', methods=["PUT"])
def check():
        conn = connect_database()
        cur = conn.cursor()
        cur.execute('SELECT email, password FROM flask WHERE email=%s', [request.json['email']])
        user = cur.fetchall()
        if not user:
            return jsonify(False)
        print(user)
        if user[0][1] == request.json['password']:
            cur.execute('UPDATE flask SET islogged=TRUE WHERE email=%s', [request.json['email']])
            return user
        else:
            return jsonify(None)

if __name__ == '__main__':
    app.run()