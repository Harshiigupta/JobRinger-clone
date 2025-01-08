from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template('about.html')


@app.route("/jobs")
def jobs():
    return render_template("jobs.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        return "Login successful!"
    return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        return "Registration successful!"
    return render_template("register.html")

if __name__ == "__main__":
    app.run(debug=True)