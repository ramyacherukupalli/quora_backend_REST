# Quora-Style Posts App (Express + EJS)

A simple CRUD-based web application built using **Node.js**, **Express.js**, and **EJS**.  
The application allows users to create, view, edit, and delete posts, following RESTful routing principles.  
This project is intended for learning backend fundamentals with server-side rendering.

---

## 🚀 Features

- Display all posts
- Create new posts
- View individual post details
- Edit existing posts
- Delete posts
- RESTful routing with Express
- PATCH and DELETE support using method-override
- Server-side rendering using EJS templates

---

## 🛠 Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Templating Engine:** EJS  
- **Middleware:** method-override  
- **Utilities:** uuid  
- **Frontend:** HTML5, CSS3  

---

## 📦 Dependencies

The following npm packages are used in this project:

```json
{
  "express": "^4.x",
  "ejs": "^3.x",
  "uuid": "^9.x",
  "method-override": "^3.x"
}
```

## 📁 Project Structure
```
.
├── public
│   └── css
│       └── style.css
├── views
│   ├── index.ejs      # Displays all posts
│   ├── new.ejs        # Form to create a new post
│   ├── show.ejs       # Displays a single post
│   └── edit.ejs       # Form to edit a post
├── index.js           # Main server file
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

Follow the steps below to run the project locally:

1. **Clone the repository**
```bash
git clone https://github.com/your-username/your-repository-name.git
``` 
2. **Navigate to the project directory**
```
cd your-repository-name
```
3. **Install all required dependencies**
```
npm install
```
4. **Start the Express server**
```
node index.js
```
5. **Access the application in your browser**
```
http://localhost:8000/posts
```

## 🔗 Application Routes
| HTTP Method | Route           | Description                  |
| ----------- | --------------- | ---------------------------- |
| GET         | /posts          | Show all posts               |
| GET         | /posts/new      | Render form to create a post |
| POST        | /posts          | Create a new post            |
| GET         | /posts/:id      | Show a specific post         |
| GET         | /posts/:id/edit | Render edit post form        |
| PATCH       | /posts/:id      | Update an existing post      |
| DELETE      | /posts/:id      | Delete a post                |
