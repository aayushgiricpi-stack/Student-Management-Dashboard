import { useState, useEffect } from "react";

import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Dashboard() {

  // =====================================
  // Load Students from localStorage
  // =====================================
  const [students, setStudents] = useState(() => {

    const savedStudents =
      localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [];
  });

  // =====================================
  // Search State
  // =====================================
  const [search, setSearch] = useState("");

  // =====================================
  // Edit Student State
  // =====================================
  const [editStudent, setEditStudent] =
    useState(null);

  // =====================================
  // Save Students to localStorage
  // =====================================
  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

  // =====================================
  // Add Student
  // =====================================
  const addStudent = (student) => {

    setStudents((prevStudents) => [
      ...prevStudents,
      student,
    ]);
  };

  // =====================================
  // Delete Student
  // =====================================
  const deleteStudent = (id) => {

    const updatedStudents =
      students.filter(
        (student) =>
          student.id !== id
      );

    setStudents(updatedStudents);
  };

  // =====================================
  // Update Student
  // =====================================
  const updateStudent = (
    updatedStudent
  ) => {

    const updatedList =
      students.map((student) =>

        student.id === updatedStudent.id
          ? updatedStudent
          : student
      );

    setStudents(updatedList);

    setEditStudent(null);
  };

  // =====================================
  // Search Filter
  // =====================================
  const filteredStudents =
    students.filter((student) =>

      student.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // =====================================
  // Statistics
  // =====================================

  // Total Students
  const totalStudents =
    students.length;

  // Total Courses
  const totalCourses =
    new Set(
      students.map(
        (student) =>
          student.course
      )
    ).size;

  return (

    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        minHeight: "100vh",
      }}
    >

      {/* =====================================
          Dashboard Header
      ===================================== */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >

        <h1
          style={{
            color: "#2563eb",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Student Dashboard
        </h1>

        <p
          style={{
            color: "gray",
            fontSize: "18px",
          }}
        >
          Manage students easily using React
        </p>

      </div>

      {/* =====================================
          Statistics Cards
      ===================================== */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >

        {/* Total Students */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #2563eb, #1d4ed8)",
            color: "white",
            width: "240px",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.15)",
          }}
        >

          <h2
            style={{
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            {totalStudents}
          </h2>

          <p
            style={{
              fontSize: "18px",
            }}
          >
            Total Students
          </p>

        </div>

        {/* Total Courses */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #16a34a, #15803d)",
            color: "white",
            width: "240px",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.15)",
          }}
        >

          <h2
            style={{
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            {totalCourses}
          </h2>

          <p
            style={{
              fontSize: "18px",
            }}
          >
            Total Courses
          </p>

        </div>

      </div>

      {/* =====================================
          Search Section
      ===================================== */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >

        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "14px",
            width: "350px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />

      </div>

      {/* =====================================
          Student Form
      ===================================== */}
      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
      />

      {/* =====================================
          Student List
      ===================================== */}
      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        setEditStudent={setEditStudent}
      />

    </div>
  );
}

export default Dashboard;