import { useState, useEffect } from "react";

import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import StudentProfile from "./StudentProfile";

function Dashboard() {

  // Load Students
  const [students, setStudents] = useState(() => {
    const savedStudents =
      localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [];
  });

  // Search
  const [search, setSearch] = useState("");

  // Edit Student
  const [editStudent, setEditStudent] =
    useState(null);

  // View Student Profile
  const [selectedStudent,
    setSelectedStudent] =
    useState(null);

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  // Add Student
  const addStudent = (student) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      student,
    ]);
  };

  // Delete Student
  const deleteStudent = (id) => {

    const updatedStudents =
      students.filter(
        (student) =>
          student.id !== id
      );

    setStudents(updatedStudents);
  };

  // Update Student
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

  // Search Filter
  const filteredStudents =
    students.filter((student) =>
      student.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // Statistics
  const totalStudents =
    students.length;

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

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >

        <h1
          style={{
            color: "#2563eb",
            fontSize: "45px",
            marginBottom: "10px",
          }}
        >
          🎓 Student Management Dashboard
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
          }}
        >
          Add, Search, Edit and Manage Students
        </p>

      </div>

      {/* Statistics */}
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
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "white",
            width: "240px",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.15)",
          }}
        >
          <h2>{totalStudents}</h2>
          <p>Total Students</p>
        </div>

        {/* Total Courses */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#16a34a,#15803d)",
            color: "white",
            width: "240px",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.15)",
          }}
        >
          <h2>{totalCourses}</h2>
          <p>Total Courses</p>
        </div>

        {/* Search Results */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#f59e0b,#d97706)",
            color: "white",
            width: "240px",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.15)",
          }}
        >
          <h2>{filteredStudents.length}</h2>
          <p>Search Results</p>
        </div>

      </div>

      {/* Search Bar */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >

        <input
          type="text"
          placeholder="🔍 Search Student..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "15px",
            width: "400px",
            maxWidth: "90%",
            borderRadius: "12px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxShadow:
              "0 3px 10px rgba(0,0,0,0.08)",
          }}
        />

      </div>

      {/* Student Form */}
      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
      />

      {/* Student List */}
      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        setEditStudent={setEditStudent}
        setSelectedStudent={
          setSelectedStudent
        }
      />

      {/* Student Profile Modal */}
      <StudentProfile
        student={selectedStudent}
        onClose={() =>
          setSelectedStudent(null)
        }
      />

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "gray",
        }}
      >
        <p>
          Student Management Dashboard © 2026
        </p>
      </div>

    </div>
  );
}

export default Dashboard;