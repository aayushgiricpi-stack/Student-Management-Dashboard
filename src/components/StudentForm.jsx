import { useState } from "react";

function StudentForm(props) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = () => {

    const newStudent = {
      id: Date.now(),
      name,
      course,
    };

    props.addStudent(newStudent);

    setName("");
    setCourse("");
  };

  return (
    <div>

      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "250px",
        }}
      />

      <br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) =>
          setCourse(e.target.value)
        }
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Add Student
      </button>

    </div>
  );
}

export default StudentForm;