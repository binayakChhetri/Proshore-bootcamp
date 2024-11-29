import "./login.css";

function Login() {
  return (
    <form>
      <h1>Login form</h1>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
