# People Management Application

This project is a **People Management System** that allows users to manage a list of people. It includes a **RESTful Web Service** built using Node.js and MongoDB for the backend and a frontend application built with Angular to manage people’s information.

## Features

### Backend (Node.js + MongoDB)
- **GET /person**: Fetches and displays a list of all people.
- **POST /person**: Adds a new person to the system.
- **PUT /person/{mobile}**: Edits the details of a person with the given mobile number.
- **DELETE /person/{mobile}**: Deletes a person from the system using their mobile number.

### Frontend (Angular)
- **People List View**: Displays a table of all people with their name, age, gender, and mobile number.
- **Edit Person**: Provides an edit form for modifying details of an individual.
- **Delete Person**: Allows deletion of a person from the list.

## Technologies Used

### Backend
- **Node.js** with **Express.js** for building the RESTful API
- **MongoDB** for database management
- **Mongoose** for interacting with MongoDB
- **Postman** for API testing

### Frontend
- **Angular** for building the user interface
- **HTML** and **CSS** for structure and styling
- **TypeScript** for handling logic and data binding

## Installation Instructions

### Backend Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/Siddharth-04/people-management.git
2.Navigate to the backend directory
   npm install
3. Start the server
  node index.js
  
###Frontend Setup
1.cd frontend
2.Install Angular CLI globally if you haven’t already:

    npm install -g @angular/cli 

3.Install the necessary dependencies: 
  npm install
  
4.Run the Angular App
  ng serve
  
5. The frontend app should now be running on http://localhost:4200

Usage
To view the list of people, navigate to the homepage.
Use the Edit button to modify details of any person.
Use the Delete button to remove a person from the list.


API Endpoints
GET /person
Fetches all people from the MongoDB database.

POST /person
Adds a new person.

PUT /person/{mobile}
Updates the details of a person with the given mobile number. 

DELETE /person/{mobile}
Deletes the person with the given mobile number.

License
This project is licensed under the MIT License.


