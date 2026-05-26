import { useState } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {

  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        fontFamily: "Arial",
      }}
    >

      <Header />

      {/* Home */}
      {page === "home" && (

        <div>

          <Button
            text="Login"
            color="blue"
            onClick={() =>
              setPage("login")
            }
          />

          <Button
            text="Register"
            color="green"
            onClick={() =>
              setPage("register")
            }
          />

        </div>
      )}

      {/* Login */}
      {page === "login" && (

        <Login
          loginSuccess={() =>
            setPage("dashboard")
          }
          goToRegister={() =>
            setPage("register")
          }
        />

      )}

      {/* Register */}
      {page === "register" && (

        <Register
          goToLogin={() =>
            setPage("login")
          }
        />

      )}

      {/* Dashboard */}
      {page === "dashboard" && (
        <Dashboard />
      )}

    </div>
  );
}

export default App;