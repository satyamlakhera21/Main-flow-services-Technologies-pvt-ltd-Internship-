# 📘 Task 4 – MERN Stack: Login Page Development

## 🎯 Objective
Develop a **Login Page** using the MERN stack (MongoDB, Express, React, Node.js) where users can log in with their credentials. Passwords are securely stored with hashing.

---

## 🛠️ Project Setup

1. Create project folder:
   ```bash
   mkdir Task4
   cd Task4
   ```
2. Install backend dependencies:
   ```bash
   npm install express mongoose cors bcryptjs body-parser
   ```
3. Run backend:
   ```bash
   node server.js
   ```
   Backend runs on **http://localhost:5000**
4. Go to frontend:
   ```bash
   cd frontend
   npm install
   ```
5. Start frontend:
   ```bash
   npm start
   ```
   Frontend runs on **http://localhost:3000**

---

## 🔐 Default Test Credentials
- **Email:** `test@example.com`
- **Password:** `123456`

---

## 📂 Project Structure
```
Task4/
 ├── server.js           # Express backend
 ├── package.json        # Backend dependencies
 ├── node_modules/
 ├── frontend/           # React frontend
 │    ├── src/
 │    │   ├── App.js
 │    │   ├── Login.js
 │    │   ├── Dashboard.js
 │    │   └── index.js
 │    ├── package.json   # Frontend dependencies
 │    └── node_modules/
```

---

## 🔄 Data Flow
1. User enters **email + password** in React login form.  
2. Frontend sends a **POST request** to backend `/login`.  
3. Backend verifies credentials against MongoDB.  
4. Response returned:  
   - ✅ Success → `{"status":"success","message":"Login successful"}`  
   - ❌ Failure → `{"status":"fail","message":"Invalid credentials"}`  
5. React shows message or redirects to **Dashboard**.

---

## 📡 API Details

### Endpoint
`POST /login`

### Request Body
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

### Responses
✅ Success:
```json
{
  "status": "success",
  "message": "Login successful"
}
```
❌ Failure:
```json
{
  "status": "fail",
  "message": "Invalid credentials"
}
```

---

## 🧪 Testing

- **Frontend validation:** shows error if fields are empty.  
- **Success:** redirects to Dashboard.  
- **Failure:** displays error message.  
- **Backend tested with Postman:** valid + invalid credentials.  
- **End-to-end flow verified:** React → Express → MongoDB → Response.  

---

## ✅ Deliverables
1. Fully functional login page (React + Express + MongoDB).  
2. API documentation (this file).  
3. Database integration with hashed passwords.  
4. Testing proof (screenshots from Postman & UI).  

---

⚡ **Task Completed Successfully** – All functional requirements of Task 4 are met.
