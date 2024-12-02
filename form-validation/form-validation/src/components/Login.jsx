import { Link } from "react-router";
import "./login.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });
  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Login form</h1>
      <label htmlFor="email" id="">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className={formik.errors.email ? "input-error" : ""}
      />
      {formik.errors.email && <p className="error">{formik.errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        required
      />
      {formik.errors.password && (
        <p className="error">{formik.errors.password}</p>
      )}

      <input type="checkbox" id="checkbox" required />
      <label style={{ display: "inline" }} htmlFor="checkbox">
        {" "}
        Do you agree our terms and condtions?
      </label>

      <Link className="navigate" to="/signUp">
        Click to Sign Up
      </Link>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
