Hospital Management System Backend
This is the backend service for the Hospital Management System, built with Node.js, Express, and MongoDB. It provides RESTful APIs for managing patients, doctors, appointments, and messages.

Table of Contents
Installation
Environment Variables
Usage
API Endpoints
Data Models
Middleware
Additional Features
Contributing
License
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/YourUsername/Hospital-Management-System-Backend.git
cd Hospital-Management-System-Backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables. Create a .env file in the root directory and add the following variables:

makefile
Copy code
PORT=5000
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3001
MONGODB_URI=mongodb://localhost:27017/employeeDB
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRES=7d
COOKIE_EXPIRES=7
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Start the server:

bash
Copy code
npm start
Environment Variables
PORT: Port on which the server will run.
FRONTEND_URL: URL of the frontend application.
DASHBOARD_URL: URL of the dashboard application.
MONGODB_URI: MongoDB connection string.
JWT_SECRET_KEY: Secret key for JWT.
JWT_EXPIRES: JWT expiration time.
COOKIE_EXPIRES: Cookie expiration time in days.
CLOUDINARY_CLOUD_NAME: Cloudinary cloud name for image uploads.
CLOUDINARY_API_KEY: Cloudinary API key.
CLOUDINARY_API_SECRET: Cloudinary API secret.
Usage
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

API Endpoints
User Management
Register a Patient

http
Copy code
POST /api/v1/user/patient/register
Request body:

json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "national_identity_card_number": "1234567890123",
  "dob": "1990-01-01",
  "gender": "Male",
  "password": "password",
  "role": "Patient"
}
Login

http
Copy code
POST /api/v1/user/login
Request body:

json
Copy code
{
  "email": "john@example.com",
  "password": "password",
  "confirmPassword": "password",
  "role": "Patient"
}
Register an Admin

http
Copy code
POST /api/v1/user/admin/register
Request body:

json
Copy code
{
  "firstName": "Admin",
  "lastName": "User",
  "email": "admin@example.com",
  "phone": "1234567890",
  "national_identity_card_number": "1234567890123",
  "dob": "1980-01-01",
  "gender": "Female",
  "password": "adminpassword"
}
Register a Doctor

http
Copy code
POST /api/v1/user/doctor/register
Request body:

json
Copy code
{
  "firstName": "Doctor",
  "lastName": "Strange",
  "email": "doctor@example.com",
  "phone": "1234567890",
  "national_identity_card_number": "1234567890123",
  "dob": "1975-01-01",
  "gender": "Male",
  "password": "doctorpassword",
  "doctorDepartment": "Cardiology"
}
Get All Doctors

http
Copy code
GET /api/v1/user/doctors
Get User Details

http
Copy code
GET /api/v1/user/admin/me
GET /api/v1/user/patient/me
Logout

http
Copy code
GET /api/v1/user/admin/logout
GET /api/v1/user/patient/logout
Appointments
Make an Appointment

http
Copy code
POST /api/v1/appointment/post
Request body:

json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "national_identity_card_number": "1234567890123",
  "dob": "1990-01-01",
  "gender": "Male",
  "appointment_date": "2023-07-12",
  "department": "Cardiology",
  "doctor_firstName": "Doctor",
  "doctor_lastName": "Strange",
  "hasVisited": false,
  "address": "123 Main St"
}
Get All Appointments

http
Copy code
GET /api/v1/appointment/getall
Update Appointment Status

http
Copy code
PUT /api/v1/appointment/update/:id
Delete Appointment

http
Copy code
DELETE /api/v1/appointment/delete/:id
Messages
Send a Message

http
Copy code
POST /api/v1/message/send
Request body:

json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello, I need assistance."
}
Get All Messages

http
Copy code
GET /api/v1/message/getallmessages
Data Models
User Schema
firstName: String (required)
lastName: String (required)
email: String (required, unique)
phone: String (required)
national_identity_card_number: String (required)
dob: Date (required)
gender: String (required, enum: ["Male", "Female"])
password: String (required, select: false)
role: String (required, enum: ["Patient", "Doctor", "Admin"])
doctorDepartment: String (required if role is "Doctor")
docAvatar: { public_id: String, url: String } (required if role is "Doctor")
Appointment Schema
firstName: String (required)
lastName: String (required)
email: String (required)
phone: String (required)
national_identity_card_number: String (required)
dob: Date (required)
gender: String (required, enum: ["Male", "Female"])
appointment_date: String (required)
department: String (required)
doctor: { firstName: String, lastName: String } (required)
hasVisited: Boolean (default: false)
address: String (required)
doctorId: ObjectId (required)
patientId: ObjectId (required)
status: String (enum: ["Pending", "Accepted", "Rejected"], default: "Pending")
Message Schema
firstName: String (required)
lastName: String (required)
email: String (required)
phone: String (required)
message: String (required)
Middleware
Authentication Middleware
isAdminAuthenticated: Middleware to check if the admin is authenticated.
isPatientAuthenticated: Middleware to check if the patient is authenticated.
Error Handling Middleware
errorMiddleware: Middleware to handle errors and send appropriate responses.
Additional Features
JWT-based authentication for users.
Cloudinary integration for image uploads.
Separate roles for Patients, Doctors, and Admins.
Comprehensive error handling.
