import Button from "./Button";
function Login(props) {

  const handleLogin = () => {

    alert("Login Successful");

    props.loginSuccess();
  };

  return (
    <div>

      <h2>Login Form</h2>

      <input
        type="email"
        placeholder="Enter Email"
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "10px",
        }}
      />

      <br />

      <input
        type="password"
        placeholder="Enter Password"
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <br /><br />

      <Button
        text="Login"
        color="blue"
        onClick={handleLogin}
      />

      <br />

      <button onClick={props.goToRegister}>
        Go To Register
      </button>

    </div>
  );
}

export default Login;