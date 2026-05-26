import Button from "./Button";

function Register(props) {

  const handleRegister = () => {

    alert("Registration Successful");

    props.goToLogin();
  };

  return (
    <div>

      <h2>Register Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "10px",
        }}
      />

      <br />

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
        text="Register"
        color="green"
        onClick={handleRegister}
      />

    </div>
  );
}

export default Register;