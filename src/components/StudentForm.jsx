import { useState, useEffect } from "react";

function StudentForm(props) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {

    if (props.editStudent) {

      setName(props.editStudent.name);

      setCourse(props.editStudent.course);
    }

  }, [props.editStudent]);

  const handleSubmit = () => {

    if (props.editStudent) {

      const updatedStudent = {
        id: props.editStudent.id,
        name,
        course,
      };

      props.updateStudent(updatedStudent);

    } else {

      const newStudent = {
        id: Date.now(),
        name,
        course,
      };

      props.addStudent(newStudent);
    }

    setName("");
    setCourse("");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        width: "350px",
        margin: "20px auto",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >

      <h2>
        {props.editStudent
          ? "Edit Student"
          : "Add Student"}
      </h2>

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
        }}
      />

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
        }}
      />

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