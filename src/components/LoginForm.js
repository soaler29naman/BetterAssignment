import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setRememberMe(true);
    }
  }, []);

  const initialValues = { email: localStorage.getItem("rememberedEmail") || "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div>
      <h2>Login</h2>
      {successMessage && <p role="alert" className="success">{successMessage}</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Login Data:", values);
          if (rememberMe) {
            localStorage.setItem("rememberedEmail", values.email);
          } else {
            localStorage.removeItem("rememberedEmail");
          }
          setSuccessMessage("Login Successful");
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
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
            </div>
            <div>
              <label>
                <Field
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  aria-checked={rememberMe}
                />
                Remember Me
              </label>
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
