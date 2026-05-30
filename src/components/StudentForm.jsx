import { useState, useEffect } from "react";

function StudentForm(props) {

  // =====================================
  // Input States
  // =====================================
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // =====================================
  // Error State
  // =====================================
  const [error, setError] = useState("");

  // =====================================
  // Load Edit Data
  // =====================================
  useEffect(() => {

    if (props.editStudent) {

      setName(props.editStudent.name);

      setCourse(props.editStudent.course);
      setEmail(props.editStudent.email || "");
      setPhone(props.editStudent.phone || "");
      setAddress(props.editStudent.address || "");
    }

  }, [props.editStudent]);

  // =====================================
  // Handle Submit
  // =====================================
  const handleSubmit = () => {

    // Clear old error
    setError("");

    // =====================================
    // Validation
    // =====================================

    // Empty Validation
    if (
      name.trim() === "" ||
      course.trim() === ""
    ) {

      setError(
        "All fields are required"
      );

      return;
    }

    // Name Length Validation
    if (name.length < 3) {

      setError(
        "Name must be at least 3 characters"
      );

      return;
    }

    // Course Length Validation
    if (course.length < 2) {

      setError(
        "Course name is too short"
      );

      return;
    }

    // =====================================
    // Update Student
    // =====================================
    if (props.editStudent) {

      const updatedStudent = {
        id: props.editStudent.id,
        name,
        course,
        email,
        phone,
        address,
      };

      props.updateStudent(updatedStudent);

      alert("Student Updated Successfully");
    }

    // =====================================
    // Add Student
    // =====================================
    else {

      const newStudent = {
        id: Date.now(),
        name,
        course,
        email,
        phone,
        address,
      };

      props.addStudent(newStudent);

      alert("Student Added Successfully");
    }

    // =====================================
    // Clear Inputs
    // =====================================
    setName("");
    setCourse("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        width: "350px",
        margin: "20px auto",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >

      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >

        {props.editStudent
          ? "Edit Student"
          : "Add Student"}

      </h2>

      {/* =====================================
          Error Message
      ===================================== */}
      {error && (

        <p
          style={{
            color: "red",
            marginBottom: "15px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {error}
        </p>

      )}

      {/* =====================================
          Name Input
      ===================================== */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid gray",
          fontSize: "15px",
        }}
      />

      {/* =====================================
          Course Input
      ===================================== */}
      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) =>
          setCourse(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid gray",
          fontSize: "15px",
        }}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid gray",
          fontSize: "15px",
        }}
      />

      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid gray",
          fontSize: "15px",
        }}
      />

      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid gray",
          fontSize: "15px",
        }}
      />

      {/* =====================================
          Submit Button
      ===================================== */}
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >

        {props.editStudent
          ? "Update Student"
          : "Add Student"}

      </button>

    </div>
  );
}

export default StudentForm;