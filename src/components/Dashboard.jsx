import { useState } from "react";

import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Dashboard() {

  const [students, setStudents] = useState([]);

  // Add Student
  const addStudent = (student) => {

    setStudents([...students, student]);
  };

  // Delete Student
  const deleteStudent = (id) => {

    const updatedStudents =
      students.filter(
        (student) => student.id !== id
      );

    setStudents(updatedStudents);
  };

  return (
    <div>

      <h1>Dashboard</h1>

      <StudentForm
        addStudent={addStudent}
      />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default Dashboard;