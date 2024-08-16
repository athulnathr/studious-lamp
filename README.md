
# Signup Form Application

This is a simple signup form built using React, Formik for form handling, Yup for validation, and basic CSS for styling. The form includes the following fields:

- **Name** (String)
- **Age** (Number, between 18 and 65)
- **Gender** (Select dropdown with options "Male" and "Female")
- **Email** (String)
- **Password** (String with at least 6 characters)
- A button to toggle between showing/hiding the password field.

Upon form submission, the app makes an API call to register the user and redirects based on the response:

- Redirect to `/home` on success.
- Redirect to `/500` on error.

## Project Structure

```
signup_form_app/
│
├── public/              # Public assets (if any)
│
├── src/
│   ├── components/
│   │   ├── SignupForm.js      # Signup form component using Formik and Yup
│   │   ├── SignupForm.css     # Styles for the signup form
│   │   ├── HomePage.js        # Home page displayed upon successful signup
│   │   └── ErrorPage.js       # Error page displayed when signup fails
│   └── App.js                # Main app component that handles routing
│
├── README.md            # Project documentation
├── package.json         # Project dependencies and scripts
└── ...                  # Other configuration files
```

## Features

- **Formik** is used to manage form state and handle submissions.
- **Yup** is used for validation with clear error messages.
- **Password toggle** button allows users to show or hide the password field.
- **CSS styling** enhances the user interface with a simple, clean design.

## Installation

To get started with this app:

1. Clone the repository or download the `.zip` file and extract it.
2. Navigate to the project directory:

```bash
cd signup_form_app
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

## Usage

- Navigate to `/signup` to see the signup form.
- Fill in the form fields and submit.
- On success, you will be redirected to the home page.
- If the submission fails, you will be redirected to a 500 error page.

## Dependencies

- **React**: For building the user interface.
- **Formik**: For form handling.
- **Yup**: For form validation.
- **React Router**: For routing between different pages.

## Customization

You can easily customize this project by:

- Updating the API endpoint in `SignupForm.js` to your backend API.
- Adding more form fields or modifying the validation logic using Formik and Yup.
- Enhancing the styles in `SignupForm.css` to match your design preferences.

## License

This project is licensed under the MIT License. Feel free to use and modify it.
