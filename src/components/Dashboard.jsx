import { useState, useEffect } from "react";

import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Dashboard() {

  // =====================================
  // Load Data from localStorage
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
  // Edit State
  // =====================================
  const [editStudent, setEditStudent] =
    useState(null);

  // =====================================
  // Save Data to localStorage
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

    setStudents([...students, student]);
  };

  // =====================================
  // Delete Student
  // =====================================
  const deleteStudent = (id) => {

    const updatedStudents =
      students.filter(
        (student) => student.id !== id
      );

    setStudents(updatedStudents);
  };

  // =====================================
  // Update Student
  // =====================================
  const updateStudent = (updatedStudent) => {

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
        .includes(search.toLowerCase())
    );

  return (
    <div>

      <h1>Dashboard</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          
        padding: "12px",
        width: "300px",
        borderRadius: "6px",
        border: "1px solid gray",
        marginBottom: "20px",
      }}
            
      />

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
      />

    </div>
  );
}

export default Dashboard;