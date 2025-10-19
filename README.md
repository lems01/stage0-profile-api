# 🚀 Profile API — Stage 0 Backend Task

## 📖 Overview
This is a simple **RESTful API** built using **Node.js and Express.js**.  
It exposes a single endpoint (`/me`) that returns user profile information along with a **random cat fact** fetched dynamically from the [Cat Facts API](https://catfact.ninja/fact).

The project demonstrates:
- REST API design
- Consuming third-party APIs
- Error handling
- Logging
- Dynamic UTC timestamp generation
- Hosting on AWS

---

## 📂 Project Structure
``` 
stage0-profile-api/
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Features
- **GET /me** endpoint returns:
  ```json
  {
    "status": "success",
    "user": {
      "email": "your.email@example.com",
      "name": "Your Full Name",
      "stack": "Node.js/Express"
    },
    "timestamp": "2025-10-18T12:34:56.789Z",
    "fact": "Cats sleep for 70% of their lives."
  }
  ```
- Fetches a **new cat fact** on every request  
- **Handles API errors** gracefully with fallback messages  
- **Dynamic UTC timestamps**  
- Deployed on **AWS**

---

## 🧰 Tech Stack
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **HTTP Client:** Axios
- **Hosting:** AWS (EC2 or Elastic Beanstalk)

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/lems01/stage0-profile-api.git
cd profile-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the root directory and set:
```
PORT=3000
```

### 4️⃣ Run Locally
```bash
npm start
```
or
```bash
node server.js
```

### 5️⃣ Test the API
Visit in your browser or API client (like Postman):  
👉 **http://localhost:3000/me**

---

## 🐾 Example Response
```json
{
  "status": "success",
  "user": {
    "email": "peter.lemule@example.com",
    "name": "Peter Lemule",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T21:30:05.123Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
```

---

## 🧱 Deployment on AWS EC2

### 1️⃣ Launch EC2 Instance
- Create an Ubuntu EC2 instance (t2.micro is fine)
- SSH into it

### 2️⃣ Install Node.js and Git
```bash
sudo apt update
sudo apt install -y nodejs npm git
```

### 3️⃣ Clone Repo & Setup
```bash
git clone https://github.com/lems01/profile-api.git
cd profile-api
npm install
```

### 4️⃣ Run the Server
```bash
npm start
```

### 5️⃣ Allow Port in Security Group
In AWS Console → EC2 → Security → Edit Inbound Rules  
Allow **port 3000** (or the port in `.env`).

### 6️⃣ Access Your API
Use your EC2 public IP:  
👉 `http://<your-ec2-public-ip>:3000/me`

---

## 🪵 Logging & Error Handling
- Uses `console.log` for debug logging  
- Gracefully handles API timeouts or failures:
  - If the Cat Facts API fails, a fallback message is returned

Example error response:
```json
{
  "status": "success",
  "user": {
    "email": "peter.lemule@example.com",
    "name": "Peter Lemule",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T21:30:05.123Z",
  "fact": "Could not fetch cat fact at this time. Please try again later."
}
```

---

## 🧪 Testing
Use Postman or curl:
```bash
curl http://localhost:3000/me
```
You should get a new cat fact each time you call the endpoint.

---

## 🧾 Submission Checklist
✅ Hosted API: `http://<your-ec2-public-ip>:3000/me`  
✅ GitHub Repo: `<repo-url>`  
✅ Includes this README  
✅ Works on multiple networks  
✅ Tested response format matches requirements

---

## ✍️ Author
**Name:** Peter Lemule  
**Email:** peter.lemule@example.com  
**Stack:** Node.js / Express.js  
**LinkedIn:** [Your LinkedIn Profile]  
**GitHub:** [Your GitHub Profile]

