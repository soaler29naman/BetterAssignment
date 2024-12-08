import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const passwordStrength = (password) => {
  if (!password) return { strength: "Too Weak", className: "weak" };
  const lengthCriteria = password.length >= 8;
  const numberCriteria = /\d/.test(password);
  const specialCharCriteria = /[!@#$%^&*]/.test(password);

  if (lengthCriteria && numberCriteria && specialCharCriteria) return { strength: "Strong", className: "strong" };
  if (lengthCriteria && (numberCriteria || specialCharCriteria)) return { strength: "Medium", className: "medium" };
  return { strength: "Weak", className: "weak" };
};

const SignUpForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  return (
    <div>
      <h2>Sign Up</h2>
      {successMessage && <p role="alert" className="success">{successMessage}</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Sign Up Data:", values);
          setSuccessMessage("Sign Up Successful");
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" aria-required="true" />
              <ErrorMessage name="email" component="p" className="error" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                aria-required="true"
              />
              <ErrorMessage name="password" component="p" className="error" />
              <p
                className={`password-strength ${
                  passwordStrength(values.password).className
                }`}
              >
                Password Strength: {passwordStrength(values.password).strength}
              </p>
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
