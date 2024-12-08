# React Sign Up and Login Forms

This project is a simple React application featuring a **Sign Up** and **Login** form, with features such as form validation using **Formik** and **Yup**, a password strength indicator, "Remember Me" functionality, and an accessible design.

---

## How to Run the Project

### Prerequisites
- Ensure **Node.js** and **npm** are installed on your system.
  - Download Node.js from [here](https://nodejs.org/).
- Ensure you have a code editor like **Visual Studio Code**.

### Steps to Run
1. Clone the repository or download the project files:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
### Install the dependencies:
npm install
Start the development server:

npm start
Open http://localhost:3000 in your browser to view the application.
Design Choices
1. UI Design
The forms have a clean and minimal design with clear labels and a modern aesthetic.
A responsive layout ensures usability across devices.
Interactive elements like buttons and checkboxes use hover effects to enhance user feedback.
2. Validation
Real-time validation with Formik and Yup provides instant feedback for user input errors.
Specific error messages ensure clarity and prevent ambiguity.
3. Password Strength Indicator
The password strength indicator evaluates the strength of the password and provides immediate visual feedback:
Weak: Red
Medium: Orange
Strong: Green
4. Remember Me Functionality
The "Remember Me" checkbox in the login form saves the email in local storage for convenience.
5. Accessibility
All input fields and form elements have proper ARIA roles and labels to ensure compatibility with assistive technologies.
Error messages and success notifications are screen-reader-friendly.
Assumptions and Limitations
Assumptions
Users must provide a valid email and a password that meets the minimum criteria for the password strength indicator to show accurate results.
The "Remember Me" functionality only remembers the email, not the password, to enhance security.

## Project Features
### Sign Up Form:

Validates email and password inputs.
Displays a password strength indicator.
Shows a success message upon valid submission.
###  Login Form:

Includes a "Remember Me" checkbox that saves the email to local storage.
Validates email and password inputs.
Displays a success message upon valid submission.
