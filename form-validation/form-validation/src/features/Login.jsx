import { Link } from "react-router";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Input } from "../UI/Input";
import { Title } from "../UI/Title";
import { apiGet } from "../services/apiGet";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setIsAuthenticated, setUsername } from "./UserSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const data = await apiGet();
      let success = false;
      data.forEach((user) => {
        if (user.email === values.email && user.password === values.password) {
          success = true;

          // If success, set the username and isAuthenticated to true in redux
          dispatch(setUsername(user.username));
          dispatch(setIsAuthenticated(true));

          // Save the username and isAuthenticated in local storage
          localStorage.setItem("userId", user.id);
          localStorage.setItem("useraname", user.username);
          localStorage.setItem("isAuthenticated", true);
        }
      });

      if (success) {
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
      resetForm();
    },
    validationSchema: basicSchema,
  });

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: "16px",
          },
        }}
      />
      <form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <div className="input-section">
          <Input
            inputType="email"
            handleChange={handleChange}
            values={values}
            errors={errors}
            name="email"
          >
            Email
          </Input>
        </div>
        <div className="input-section">
          <Input
            inputType="password"
            name="password"
            handleChange={handleChange}
            values={values}
            errors={errors}
          >
            Password
          </Input>
        </div>
        <div className="input-section checkbox-section">
          <Input inputType="checkbox" name="rememberPwd">
            Remember password ?
          </Input>
        </div>

        <Link className="navigate" to="/sign-up">
          Click to signup
        </Link>
        <div className="input-section">
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;
