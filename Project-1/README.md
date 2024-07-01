## Task Management Application

This project is designed to help users manage their daily tasks efficiently. The application provides features such as adding, updating, deleting, and viewing tasks. It is built using HTML, CSS, and JavaScript.

### Features

- **Home Page**
  - A welcome message.
  - A navigation bar linking to different sections of the application (Tasks, About, Contact).
  - An introduction to the application.

- **Tasks Page**
  - Display a list of tasks fetched from a dummy API (e.g., JSONPlaceholder). Each task includes a title, description, and status (completed or not).
  - CRUD operations:
    - **Create:** Add new tasks using a form.
    - **Read:** Fetch and display tasks from the API.
    - **Delete:** Remove tasks from the list.
  - Use JavaScript's fetch API to handle these operations.
  - Handle loading states and possible errors gracefully.

- **About Page**
  - A section about the application and its purpose.

- **Contact Page**
  - A contact form with fields for Name, Email, and Message to send a message.

### Project Structure

- **index.html:** Home page of the application.
- **tasks.html:** Page to display and manage tasks.
- **about.html:** About page explaining the purpose of the application.
- **contact.html:** Contact page with a form to get in touch.

### How to Set Up the Project

1. Clone the repository from GitHub.
   ```sh
   git clone https://github.com/abubakar2029/MERN-Internship-Projects/tree/main/Project-1
   ```
2. Navigate to the project directory.
   ```sh
   cd task-management-app
   ```
3. Open `index.html` in your browser to view the home page.

### Live Demo

You can view the live demo of the application [here](https://boorish-tray.surge.sh/).