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
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >

      <Header />

      {/* HOME */}
      {page === "home" && (

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >

          <Button
            text="Login"
            color="#2563eb"
            onClick={() =>
              setPage("login")
            }
          />

          <Button
            text="Register"
            color="#16a34a"
            onClick={() =>
              setPage("register")
            }
          />

        </div>
      )}

      {/* LOGIN */}
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

      {/* REGISTER */}
      {page === "register" && (

        <Register
          goToLogin={() =>
            setPage("login")
          }
        />

      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <Dashboard />
      )}

    </div>
  );
}

export default App;